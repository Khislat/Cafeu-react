import { Link } from 'react-router-dom';
import { useCafeuContext } from '../../context/CafeuContext';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { retrieveAllMenu } from '../../Redux/shopPage/selector';
import { Product, ProductInquiry } from '../../../libs/types/product';
import { setAllMenu } from '../../Redux/shopPage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';
import { ProductCollection } from '../../../libs/enums/product.enum';
import { serverApi } from '../../../libs/config';

/** REDUX SLICE & SELECTOR **/
const allMenuRetriever = createSelector(retrieveAllMenu, (allMenu) => ({ allMenu }));

const actionDispatch = (distpatch: Dispatch) => ({
	setAllMenu: (data: Product[]) => distpatch(setAllMenu(data)),
});

const ShopAllProductSection = () => {
	const { allMenu } = useSelector(allMenuRetriever);
	const { setAllMenu } = actionDispatch(useDispatch());
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

	const {
		currentItems,
		currentPage,
		handlePageChange,
		totalPages,
		openLightBoxModal,
		addToCart,
		addToWishlist,
		wishlist,
	} = useCafeuContext();
	return (
		<div className="shop-products-wrapper">
			{currentItems.length === 0 ? (
				<div className="no-product-container">
					<div className="no-product-img-container">
						<img src="/img/no-product.jpg" alt="no-product-img" />
					</div>
					<p className="no-product-text">No Product Available</p>
					<Link to="/" className="custom-btn mt-10">
						Go back to Home
					</Link>
				</div>
			) : (
				<>
					<div
						className="row row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-1"
						data-aos="fade-up"
						data-aos-duration="500"
					>
						{allMenu.map((item) => {
							const imagePath = `${serverApi}/${item.productImages}`;
							return (
								<div className="col" key={item._id}>
									<div className="shop-product-item mb-30">
										<div className="shop-product-item-inner">
											<div className="shop-product-img w-100">
												<a href={`/shop/${item._id}`}>
													<img src={imagePath} alt={item.productName} />
												</a>
												{item.productPrice && <span className="shop-onsale">Sale!</span>}
												<div className="shop-product-action">
													{/* <a
													role="button"
													onClick={() => addToWishlist(item._id)}
													className={wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? 'active' : ''}
												>
													<i className="icofont-heart-alt"></i>
												</a> */}
													{/* <a role="button" onClick={() => addToCart(item.id)}>
													<i className="icofont-shopping-cart"></i>
												</a>
												<a role="button" onClick={() => openLightBoxModal(item)}>
													<i className="icofont-eye"></i>
												</a> */}
												</div>
											</div>
											<div className="shop-product-content">
												<h4 className="shop-product-title">
													<a href={`/shop/${item._id}`}>{item.productName}</a>
												</h4>
												<div className="shop-product-rating">
													<i className="icofont-ui-rating"></i>
													<i className="icofont-ui-rating"></i>
													<i className="icofont-ui-rating"></i>
													<i className="icofont-ui-rating"></i>
													<i className="icofont-ui-rating"></i>
												</div>
												<div className="shop-product-price">
													<span className="shop-price">{item.productPrice}$</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="basic-pagination mb-50 mt-20" data-aos="fade-up" data-aos-duration="400">
						<ul className="page-numbers">
							<li>
								<button
									disabled={currentPage === 1}
									onClick={() => handlePageChange(currentPage - 1)}
									className="page-number-btn"
								>
									<i className="icofont-rounded-left"></i>
								</button>
							</li>
							{Array.from({ length: Math.ceil(totalPages) }).map((_, index) => (
								<li key={index}>
									<button
										className={`page-number-btn ${currentPage === index + 1 ? 'current' : ''}`}
										onClick={() => handlePageChange(index + 1)}
									>
										<span aria-current="page" className="page-number">
											{index + 1}
										</span>
									</button>
								</li>
							))}
							<li>
								<button
									disabled={currentPage === totalPages}
									className="page-number-btn"
									onClick={() => handlePageChange(currentPage + 1)}
								>
									<i className="icofont-rounded-right"></i>
								</button>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default ShopAllProductSection;
