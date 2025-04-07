import { useCafeuContext } from "../../context/CafeuContext";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
interface MenuProps {
	style: string;
	showMoreBtn: boolean;
	endIndex: number;
}
const MenuProducts: React.FC<MenuProps> = ({
	style,
	showMoreBtn,
	endIndex,
}) => {
	const authMember = null;
	const {
		activeMenuProductTab,
		handleMenuProductTabChange,
		filteredMenuProductList,
		addToWishlist,
		addToCart,
		openLightBoxModal,
		handleMenuShowMore,
		handleMenuShowLess,
		wishlist,
	} = useCafeuContext();
	const menuProductItems = filteredMenuProductList.slice(0, endIndex);
	return (
		<section>
			<div className={`product ${style} cpy-8`}>
				<div className="container">
					<div className="product-inner">
						<div className="row">
							<div
								className="section-head text-center"
								data-aos="fade-up"
								data-aos-duration="500">
								<span className="sm-title ">Special Menu</span>
								<h2 className="sec-title">Our Specials Menu</h2>
								<div
									className="product-cat "
									data-aos="fade-up"
									data-aos-duration="1500">
									<div className="controls">
										<Nav
											className="cat-menu justify-content-center"
											activeKey={activeMenuProductTab}
											onSelect={handleMenuProductTabChange}>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="all">
													<span className="cat-name">All Categories</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="pizza">
													<span className="cat-name">Pizza</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="asian">
													<span className="cat-name">Asian</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="burger">
													<span className="cat-name">Burger</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="salad">
													<span className="cat-name">Salad</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="bakery">
													<span className="cat-name">Bakery</span>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="cat-menu-li" eventKey="drink">
													<span className="cat-name">Drink</span>
												</Nav.Link>
											</Nav.Item>
										</Nav>
									</div>
								</div>
							</div>
						</div>
						<div
							className="describe-content mt-50"
							data-aos="fade-up"
							data-aos-duration="1000">
							<div className="all-product">
								<div className="row justify-content-center">
									{menuProductItems.map((item) => (
										<div
											className={`col-md-6 col-xl-3 col-lg-4 col-sm-6 mb-4 mix ${item.category}`}
											key={item.id}>
											<div className="product-card">
												{item.status && <p className="status-product">New</p>}
												<div className="product-img">
													<Link to={`/shop/${item.slug}`}>
														<img src={item.imgSrc} alt={item.name} />
													</Link>
												</div>
												<div className="product-details">
													<Link
														to={`/shop/${item.slug}`}
														className="product-name">
														{item.name}
													</Link>
													<ul className="rating">
														<li>
															{" "}
															<span className="icofont-ui-rating"></span>
														</li>
														<li>
															{" "}
															<span className="icofont-ui-rating"></span>
														</li>
														<li>
															{" "}
															<span className="icofont-ui-rating"></span>
														</li>
														<li>
															{" "}
															<span className="icofont-ui-rating"></span>
														</li>
														<li>
															{" "}
															<span
																className={`icofont-ui-rating ${
																	item.rating ? item.rating : ""
																}`}></span>
														</li>
													</ul>
													<p className="price">{item.priceRange}</p>


													{authMember ? (<ul className="pd-btn-group">
														<li>
															<a
																role="button"
																onClick={() => addToWishlist(item.id)}
																className={`shop-btn ${
																	wishlist.some(
																		(wishlistItem) =>
																			wishlistItem.id === item.id
																	)
																		? "active"
																		: ""
																}`}>
																<span className="icofont-heart-alt"></span>
															</a>
														</li>
														<li>
															<a
																className="shop-btn"
																role="button"
																onClick={() => addToCart(item.id)}>
																<span className="icofont-shopping-cart"></span>
															</a>
														</li>
														<li>
															<a
																className="shop-btn"
																role="button"
																onClick={() => openLightBoxModal(item)}>
																<span className="icofont-eye"></span>
															</a>
														</li>
													</ul>) : null}
													
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							{showMoreBtn && (
								<div className="row">
									<div className="text-center my-4">
										{menuProductItems.length === 8 ? (
											<a
												className="custom-btn"
												role="button"
												onClick={handleMenuShowMore}>
												Show More
											</a>
										) : menuProductItems.length > 8 ? (
											
											<a
												className="custom-btn"
												role="button"
												onClick={handleMenuShowLess}>
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
