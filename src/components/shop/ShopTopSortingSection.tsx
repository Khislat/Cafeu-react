import { useCafeuContext } from '../../context/CafeuContext';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ProductService from '../../services/ProductService';
import { ProductInquiry } from '../../../libs/types/product';
import { setAllMenu } from '../../Redux/shopPage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { retrieveAllMenu } from '../../Redux/shopPage/selector';
import { Product } from '../../../libs/types/product';
import { ProductCollection } from '../../../libs/enums/product.enum';

const allMenuRetriever = createSelector(retrieveAllMenu, (allMenu) => ({ allMenu }));

const actionDispatch = (distpatch: Dispatch) => ({
	setAllMenu: (data: Product[]) => distpatch(setAllMenu(data)),
});

const ShopTopSortingSection = () => {
	const { allMenu } = useSelector(allMenuRetriever);
	const { setAllMenu } = actionDispatch(useDispatch());
	const [sortingOption, setSortingOption] = useState<string>('default');
	const [productSearch, setProductSearch] = useState<ProductInquiry>({
		page: 1,
		limit: 20,
		order: 'createdAt',
		search: '',
	});

	useEffect(() => {
		// Backend server data fetch = Data
		const product = new ProductService();
		product
			.getProducts(productSearch)
			.then((data) => {
				setAllMenu(data);
			})
			.catch((err) => console.log(err));
	}, [productSearch]);

	const searchOrderHandlear = (order: string) => {
		productSearch.page = 1;
		productSearch.order = order;
		setProductSearch({ ...productSearch });
	};

  const searchCollectionHandler = (collection: ProductCollection) => {
		productSearch.page = 1;
		productSearch.productCollection = collection;
		setProductSearch({ ...productSearch });
	};
	const { startIndex, endIndex } = useCafeuContext();

	const filteredProducts = allMenu;
	const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedSortingOption = e.target.value;
		// Update the sorting option in the parent component's state using setSortingOption
		setSortingOption(selectedSortingOption);
	};

	return (
		<div className="shop-notice-result-wrapper mb-50">
			<div className="row align-items-center">
				<div className="col-md-8 text-center text-md-start" data-aos="fade-up" data-aos-duration="500">
					<span className="shop-notice-result">
						{`${
							filteredProducts.length === 0
								? 'No Products to Show'
								: `Showing ${startIndex + 1}-${endIndex} of ${filteredProducts.length} Products`
						}`}
					</span>
				</div>
				<div className="col-md-4 text-center text-md-end" data-aos="fade-up" data-aos-duration="500">
					<div className="shop-notice-select">
						<Form.Select value={sortingOption} onChange={handleSortingChange}>
							<option value="default">Default Sorting</option>
							<option value="lowToHigh" onClick={() => searchOrderHandlear('createdAt')}>
								Recently Added
							</option>
							<option value="highToLow" onClick={() => searchOrderHandlear('productPrice')}>
								Price: Low to High
							</option>
							<option value="sortAToZ" onClick={() => searchCollectionHandler}>
								Most Viewed
							</option>
						</Form.Select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopTopSortingSection;
