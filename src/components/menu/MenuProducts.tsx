import { createSelector } from '@reduxjs/toolkit';
import { useCafeuContext } from '../../context/CafeuContext';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { retrieveSpecialMenu } from '../../Redux/menuPage/selector';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { setSpecialMenu } from '../../Redux/menuPage/slice';
import { Product, ProductInquiry } from '../../../libs/types/product';
import { serverApi } from '../../../libs/config';
import { ProductCollection } from '../../../libs/enums/product.enum';
import ProductService from '../../services/ProductService';
import { toast } from 'react-toastify';
import useBasket from '../hooks/useBasket';
import { useGlobals } from '../hooks/useGlobals';
interface MenuProps {
	style: string;
	showMoreBtn: boolean;
	endIndex: number;
}

// Redux selector
const specialMenuRetriever = createSelector(retrieveSpecialMenu, (specialMenu) => ({
	specialMenu,
}));

const actionDispatch = (distpatch: Dispatch) => ({
	setSpecialMenu: (data: Product[]) => distpatch(setSpecialMenu(data)),
});

const MenuProducts: React.FC<MenuProps> = ({ style, showMoreBtn, endIndex }) => {
	const { onAdd } = useBasket();
	const { authMember, setAuthMember } = useGlobals();
	const { specialMenu } = useSelector(specialMenuRetriever);
	const { setSpecialMenu } = actionDispatch(useDispatch());
	const initialMenuItemsToShow = 4;
	const [menuItemsToShow, setMenuItemsToShow] = useState<number>(initialMenuItemsToShow);

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
				setSpecialMenu(data);
			})
			.catch((err) => console.log(err));
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

	const handleMenuShowMore = () => {
		// When the "Show More" button is clicked, set itemsToShow to the total number of items in the list
		setMenuItemsToShow(specialMenu.length);
	};
	const handleMenuShowLess = () => {
		setMenuItemsToShow(initialMenuItemsToShow);
	};

	const {
		activeMenuProductTab,
		handleMenuProductTabChange,
		filteredMenuProductList,
		addToWishlist,
		addToCart,
		openLightBoxModal,

		wishlist,
	} = useCafeuContext();
	const menuProductItems = specialMenu.slice(0, menuItemsToShow);
	return (
		<section>
			<div className={`product ${style} cpy-8`}>
				<div className="container">
					<div className="product-inner">
						<div className="row">
							<div className="section-head text-center" data-aos="fade-up" data-aos-duration="500">
								<span className="sm-title ">Special Menu</span>
								<h2 className="sec-title">Our Specials Menu</h2>
								<div className="product-cat " data-aos="fade-up" data-aos-duration="1500">
									<div className="controls">
										<Nav
											className="cat-menu justify-content-center"
											activeKey={activeMenuProductTab}
											onSelect={handleMenuProductTabChange}
										>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
													eventKey="all"
													onClick={() => searchCollectionHandler(ProductCollection.ALL)}
												>
													<img src="img/category/icon/7.png" alt="" className="cat-icon" />
													<span className="cat-name">All </span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													className="cat-menu-li"
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
						<div className="describe-content mt-50" data-aos="fade-up" data-aos-duration="1000">
							<div className="all-product">
								<div className="row justify-content-center">
									{menuProductItems.map((item) => {
										const imagePath = `${serverApi}/${item.productImages}`;
										return (
											<div
												className={`col-md-6 col-xl-3 col-lg-4 col-sm-6 mb-4 mix ${item.productCollection}`}
												key={item._id}
											>
												<div className="product-card">
													{item.productStatus && <p className="status-product">New</p>}
													<div className="product-img">
														<Link to={`/shop/${item._id}`}>
															<img src={imagePath} alt={item.productName} />
														</Link>
													</div>
													<div className="product-details">
														<Link to={`/shop/${item._id}`} className="product-name">
															{item.productName}
														</Link>
														<ul className="rating">
															<li>
																{' '}
																<span className="icofont-ui-rating"></span>
															</li>
															<li>
																{' '}
																<span className="icofont-ui-rating"></span>
															</li>
															<li>
																{' '}
																<span className="icofont-ui-rating"></span>
															</li>
															<li>
																{' '}
																<span className="icofont-ui-rating"></span>
															</li>
															<li>
																{' '}
																<span className={`icofont-ui-rating `}></span>
															</li>
														</ul>
														<p className="price">{item.productPrice}$</p>

														{authMember ? (
															<ul className="pd-btn-group">
																<li>
																	<a
																		role="button"
																		onClick={() => toast.success('Successfully added to wishlist!')}
																		className={`shop-btn 
																		}`}
																	>
																		<span className="icofont-heart-alt"></span>
																	</a>
																</li>
																<li>
																	<a
																		className="shop-btn"
																		role="button"
																		onClick={(e) => {
																			onAdd({
																				_id: item._id,
																				quantity: 1,
																				name: item.productName,
																				price: item.productPrice,
																				image: item.productImages[0],
																			});
																			e.stopPropagation();
																		}}
																	>
																		<span className="icofont-shopping-cart"></span>
																	</a>
																</li>
																<li>
																	<a className="shop-btn" role="button">
																		<span className="icofont-eye"></span>
																	</a>
																</li>
															</ul>
														) : null}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
							{showMoreBtn && (
								<div className="row">
									<div className="text-center my-4">
										{menuProductItems.length === 4 ? (
											<a className="custom-btn" role="button" onClick={handleMenuShowMore}>
												Show More
											</a>
										) : menuProductItems.length > 4 ? (
											<a className="custom-btn" role="button" onClick={handleMenuShowLess}>
												Show Less
											</a>
										) : (
											<></>
										)}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MenuProducts;
