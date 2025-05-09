import { Link } from 'react-router-dom';
import { useCafeuContext } from '../../context/CafeuContext';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { retrieveAllMenu } from '../../Redux/shopPage/selector';
import { Product, ProductInquiry } from '../../../libs/types/product';
import { setAllMenu } from '../../Redux/shopPage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, ChangeEvent } from 'react';
import ProductService from '../../services/ProductService';
import { ProductCollection } from '../../../libs/enums/product.enum';
import { serverApi } from '../../../libs/config';
import { useNavigate } from 'react-router-dom';
import useBasket from '../hooks/useBasket';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Stack } from '@mui/material';

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
		limit: 10,
		order: 'createdAt',

		search: '',
	});
	const [searchText, setSearchText] = useState<string>('');
	const navigation = useNavigate();
	const { onAdd } = useBasket();
	const [totalCount, setTotalCount] = useState(0);

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

	const searchCollectionHandler = (collection: ProductCollection) => {
		productSearch.page = 1;
		productSearch.productCollection = collection;
		setProductSearch({ ...productSearch });
	};

	const searchOrderHandlear = (order: string) => {
		productSearch.page = 1;
		productSearch.order = order;
		setProductSearch({ ...productSearch });
	};

	const searchProductHandlear = () => {
		productSearch.search = searchText;
		setProductSearch({ ...productSearch });
	};

	const paginationHandlear = (e: ChangeEvent<any>, value: number) => {
		productSearch.page = value;
		setProductSearch({ ...productSearch });
	};

	const chooseDishHandlear = (id: string) => {
		navigation(`/products/${id}`);
	};

	//Calculate total pages
	const totalPages = Math.ceil(totalCount / productSearch.limit);
	const currentPage = productSearch.page;
	const handlePageChange = paginationHandlear;
	const {
		currentItems,

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
													<a
														role="button"
														onClick={(e) => {
															e.preventDefault(); // sahifa reload bo‘lmasin
															toast.success('Successfully added to wishlist!');
														}}
													>
														<i className="icofont-heart-alt"></i>
													</a>
													<a
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
														<i className="icofont-shopping-cart"></i>
													</a>
													<a role="button">
														<i className="icofont-eye"></i>
													</a>
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

					<Stack className={'pagination-section'}>
						<Pagination
							count={allMenu.length !== 0 ? productSearch.page + 1 : productSearch.page}
							page={productSearch.page}
							renderItem={(item) => (
								<PaginationItem
									components={{
										previous: ArrowBackIcon,
										next: ArrowForwardIcon,
									}}
									{...item}
									sx={{
										color: '#CC3334',
										borderColor: '#CC3334',
										'&.Mui-selected': {
											backgroundColor: '#CC3334',
											color: 'white',
										},
									}}
								/>
							)}
							onChange={paginationHandlear}
						/>
					</Stack>
				</>
			)}
		</div>
	);
};

export default ShopAllProductSection;
