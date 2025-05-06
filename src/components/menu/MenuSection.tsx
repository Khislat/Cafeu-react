// import { Link } from 'react-router-dom';
// import { useCafeuContext } from '../../context/CafeuContext';
// import { Nav } from 'react-bootstrap';

// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
// import { retrieveSpecialDishes } from '../../Redux/homePage/selector';

// /** REDUX SLICE & SELECTOR **/
// const specialDishesReriever = createSelector(retrieveSpecialDishes, (specialDishes) => ({ specialDishes }));

// const MenuSection = () => {
// 	const { specialDishes } = useSelector(specialDishesReriever);

// 	console.log('specialDishes:', specialDishes);

// 	const authMember = true;
// 	// const { activeMenuTab, handleMenuTabChange, filteredItemList, addToCart, wishlisttoast, wishlist } =
// 	// 	useCafeuContext();
// 	return (
// 		<section>
// 			<div className="all-product all-product-1 menu-section-container">
// 				<div className="product-inner cpy-8">
// 					<div className="container">
// 						<div className="row">
// 							<div className="section-head text-center">
// 								<span className="sm-title ">Special Menu</span>
// 								<h2 className="sec-title">Our Specials Menu</h2>
// 								<div className="product-cat mb-40">
// 									<div className="controls">
// 										<Nav
// 											className="cat-menu justify-content-center home-1-menu-section"
// 											activeKey={activeMenuTab}
// 											onSelect={handleMenuTabChange}
// 										>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li " eventKey="all">
// 													<img src="img/category/icon/7.png" alt="" className="cat-icon" />
// 													<span className="cat-name">All</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li " eventKey="pizza">
// 													<img src="img/category/icon/1.png" alt="" className="cat-icon" />
// 													<span className="cat-name">Pizza</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li" eventKey="asian">
// 													<img src="img/category/icon/2.png" alt="" className="cat-icon" />
// 													<span className="cat-name">Asian</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li" eventKey="burger">
// 													<img src="img/category/icon/3.png" alt="" className="cat-icon" />
// 													<span className="cat-name">Burger</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li" eventKey="salad">
// 													<img src="img/category/icon/4.png" alt="" className="cat-icon" />
// 													<span className="cat-name">Salad</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li" eventKey="bakery">
// 													<img src="img/category/icon/5.png" alt="" className="cat-icon" />
// 													<span className="cat-name">Bakery</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 											<Nav.Item>
// 												<Nav.Link className="cat-menu-li" eventKey="drink">
// 													<img src="img/category/icon/6.png" alt="" className="cat-icon" />
// 													<span className="cat-name">Drink</span>
// 												</Nav.Link>
// 											</Nav.Item>
// 										</Nav>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="row" data-aos="fade-up" data-aos-duration="1000">
// 							{filteredItemList.map((item) => (
// 								<div className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4 mix ${item.category}`} key={item.id}>
// 									<div className="product-card">
// 										<div className="product-img">
// 											<Link to={`/shop/${item.slug}`}>
// 												<img src={item.imgSrc} alt="image not found" />
// 											</Link>
// 										</div>
// 										<div className="product-details">
// 											<Link to={`/shop/${item.slug}`} className="product-name">
// 												{item.name}
// 											</Link>
// 											<p className="product-sm-des">
// 												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis
// 											</p>
// 											<div className="cart-price-wishlist">
// 												<p className="delivery-text">Delivery Fee : $10</p>
// 												{authMember ? (
// 													<div className="cart-wishlist">
// 														<a
// 															className={`sm-custom-btn wishlist-btn ${
// 																wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? 'active' : ''
// 															}`}
// 															role="button"
// 															onClick={() => wishlisttoast()}
// 														>
// 															<span className="icofont-plus"></span>
// 														</a>
// 														<a className="sm-custom-btn cart-btn" role="button" onClick={() => addToCart(item.id)}>
// 															<span className="icofont-cart-alt"></span>
// 														</a>
// 													</div>
// 												) : null}
// 											</div>
// 										</div>
// 										<p className="product-price">${item.price}</p>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default MenuSection;

import { Link } from 'react-router-dom';
import { useCafeuContext } from '../../context/CafeuContext';
import { Nav } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { retrieveSpecialDishes } from '../../Redux/homePage/selector';
import { serverApi } from '../../../libs/config';
import { productList } from '../../data/Data';
import { ChangeEvent, useEffect, useState } from 'react';
import { Product, ProductInquiry } from '../../../libs/types/product';
import { ProductCollection } from '../../../libs/enums/product.enum';
import MemberService from '../../services/MemberService';
import ProductService from '../../services/ProductService';
import { setSpecialDishes } from '../../Redux/homePage/slice';
import { Dispatch } from '@reduxjs/toolkit';

/** REDUX SLICE & SELECTOR **/
const specialDishesReriever = createSelector(retrieveSpecialDishes, (specialDishes) => ({ specialDishes }));

const actionDispatch = (distpatch: Dispatch) => ({
	setSpecialDishes: (data: Product[]) => distpatch(setSpecialDishes(data)),
});

const MenuSection = () => {
	const authMember = true;
	const { specialDishes } = useSelector(specialDishesReriever);
	const { setSpecialDishes } = actionDispatch(useDispatch());
	const [productSearch, setProductSearch] = useState<ProductInquiry>({
		page: 1,
		limit: 8,
		order: 'createdAt',
		productCollection: ProductCollection.PIZZA,
		search: '',
	});

	useEffect(() => {
		// Backend server data fetch = Data
		const product = new ProductService();
		product
			.getProducts(productSearch)
			.then((data) => {
				setSpecialDishes(data);
			})
			.catch((err) => console.log(err));

		const member = new MemberService();
	}, [productSearch]);

	/** HANDLERS **/
	const searchCollectionHandler = (collection: ProductCollection) => {
		productSearch.page = 1;
		productSearch.productCollection = collection;
		setProductSearch({ ...productSearch });
	};

	const paginationHandlear = (e: ChangeEvent<any>, value: number) => {
		productSearch.page = value;
		setProductSearch({ ...productSearch });
	};

	return (
		<section>
			<div className="all-product all-product-1 menu-section-container">
				<div className="product-inner cpy-8">
					<div className="container">
						<div className="row">
							<div className="section-head text-center">
								<span className="sm-title ">Special Menu</span>
								<h2 className="sec-title">Our Specials Menu</h2>
								<div className="product-cat mb-40">
									<div className="controls">
										<Nav className="cat-menu justify-content-center home-1-menu-section">
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li "
													eventKey="all"
													onClick={() => searchCollectionHandler(ProductCollection.ALL)}
												>
													<img src="img/category/icon/7.png" alt="" className="cat-icon" />
													<span className="cat-name">All</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li "
													eventKey="pizza"
													onClick={() => searchCollectionHandler(ProductCollection.PIZZA)}
												>
													<img src="img/category/icon/1.png" alt="" className="cat-icon" />
													<span className="cat-name">Pizza</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
													eventKey="asian"
													onClick={() => searchCollectionHandler(ProductCollection.ASIAN)}
												>
													<img src="img/category/icon/2.png" alt="" className="cat-icon" />
													<span className="cat-name">Asian</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
													eventKey="burger"
													onClick={() => searchCollectionHandler(ProductCollection.BURGER)}
												>
													<img src="img/category/icon/3.png" alt="" className="cat-icon" />
													<span className="cat-name">Burger</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
													eventKey="salad"
													onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
												>
													<img src="img/category/icon/4.png" alt="" className="cat-icon" />
													<span className="cat-name">Salad</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
													eventKey="bakery"
													onClick={() => searchCollectionHandler(ProductCollection.BAKERY)}
												>
													<img src="img/category/icon/5.png" alt="" className="cat-icon" />
													<span className="cat-name">Bakery</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
													eventKey="drink"
													onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
												>
													<img src="img/category/icon/6.png" alt="" className="cat-icon" />
													<span className="cat-name">Drink</span>
												</Nav.Link>
											</Nav.Item>
										</Nav>
									</div>
								</div>
							</div>
						</div>

						{/* SPECIAL DISHES DISPLAY */}
						<div className="row" data-aos="fade-up" data-aos-duration="1000">
							{specialDishes.map((product) => {
								const imagePath = `${serverApi}/${product.productImages}`;
								return (
									<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" key={product._id}>
										<div className="product-card">
											<div className="product-img">
												<Link to={`/shop/${product._id}`}>
													<img src={imagePath} alt={product.productName} />
												</Link>
											</div>
											<div className="product-details">
												<Link to={`/shop/${productList}`} className="product-name">
													{product.productName}
												</Link>
												<p className="product-sm-des">{product.productDesc || 'Delicious and fresh.'}</p>
												<div className="cart-price-wishlist">
													<p className="delivery-text">Delivery Fee : $10</p>
													{authMember ? (
														<div className="cart-wishlist">
															<a className="sm-custom-btn wishlist-btn" role="button">
																<span className="icofont-plus"></span>
															</a>
															<a className="sm-custom-btn cart-btn" role="button">
																<span className="icofont-cart-alt"></span>
															</a>
														</div>
													) : null}
												</div>
											</div>
											<p className="product-price">${product.productPrice}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MenuSection;
