import React from 'react';
import { useEffect, useState } from 'react';
import { useCafeuContext } from '../../context/CafeuContext';
import ProductService from '../../services/ProductService';
import { ProductInquiry } from '../../../libs/types/product';
import { setAllMenu } from '../../Redux/shopPage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { retrieveAllMenu } from '../../Redux/shopPage/selector';
import { Product } from '../../../libs/types/product';

/** REDUX SLICE & SELECTOR **/
const allMenuRetriever = createSelector(retrieveAllMenu, (allMenu) => ({ allMenu }));

const actionDispatch = (distpatch: Dispatch) => ({
	setAllMenu: (data: Product[]) => distpatch(setAllMenu(data)),
});

const ShopSearchBarSection = () => {
  const { allMenu } = useSelector(allMenuRetriever);
	const { setAllMenu } = actionDispatch(useDispatch());
	const [searchText, setSearchText] = useState<string>('');
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

  useEffect(() => {
		if (searchText === "") {
			productSearch.search = "";
			setProductSearch({ ...productSearch });
		}
	}, [searchText]);

	/** HANDLER **/
	const searchProductHandlear = () => {
		productSearch.search = searchText;
		setProductSearch({ ...productSearch });
	};

	return (
		<form
			className="hero-form mb-50"
			action="#"
			data-aos="fade-up"
			data-aos-duration="1000"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="input-group">
				<input
					type="text"
					className="form-control subscribtion-input"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') searchProductHandlear();
					}}
				/>
				<button type="submit" className="custom-btn" onClick={searchProductHandlear}>
					<span className="icofont-search-1"></span>
				</button>
			</div>
		</form>
	);
};

export default ShopSearchBarSection;
