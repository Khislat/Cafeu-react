import { Link, useParams } from 'react-router-dom';
import BreadcrumbSection from '../components/breadcrumb/BreadcrumbSection';
import Layout from '../components/layout/Layout';
import ShopDetailSection from '../components/shop/ShopDetailSection';
import { productList } from '../data/Data';
import { useEffect } from 'react';

import { setChosenProduct } from '../Redux/homePage/slice';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { createSelector } from 'reselect';
import { Product } from '../../libs/types/product';
import { retriveChosenProduct } from '../Redux/homePage/selector';
import ProductService from '../services/ProductService';

const actionDispatch = (dispatch: Dispatch) => ({
	setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const chosenProductRetriever = createSelector(retriveChosenProduct, (chosenProduct) => ({
	chosenProduct,
}));

const ShopDetailsPage = () => {
	const { productId } = useParams();
	const { setChosenProduct } = actionDispatch(useDispatch());
	const { chosenProduct } = useSelector(chosenProductRetriever);

	useEffect(() => {
		const product = new ProductService();
		product
			.getProduct(productId!)
			.then((data) => {
				setChosenProduct(data), console.log('data', data);
			})
			.catch((err) => console.log(err));
	}, []);

	const shopData = chosenProduct;
	return (
		<div className="wrapper">
			<Layout>
				{shopData ? (
					<>
						<BreadcrumbSection header="Shop Details Page" title="Shop Details" />
						<ShopDetailSection shopData={shopData} />
					</>
				) : (
					<>
						<BreadcrumbSection header="Product Not Found" title="Shop Details" />
						<div className="dynamic-error-page-container">
							<div className="not-found-image-container">
								<img src="/img/404.jpg" alt="page not found" />
							</div>
							<p className="no-page-found-text">The Product you are looking for does not exist.</p>
							<Link to="/" className="custom-btn">
								Go back to Home
							</Link>
						</div>
					</>
				)}
			</Layout>
		</div>
	);
};
export default ShopDetailsPage;
