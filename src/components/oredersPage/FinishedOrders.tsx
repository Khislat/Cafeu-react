import React from "react";
import moment from "moment";
import { Box, Button, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "../../Redux/ordersPage/selector";
import { Order, OrderItem } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";


/** REDUX SLICE & SELECTOR **/

const finishedOrdersRetriever = createSelector(
	retrieveFinishedOrders,
	(finishedOrders) => ({
		finishedOrders,
	})
);

export default function FinishedOrders() {
	const { finishedOrders } = useSelector(finishedOrdersRetriever);

	return (
		<TabPanel value={"3"}>
			<Stack>
				{finishedOrders?.map((order: Order) => {
					return (
						<Box key={order._id} className="order-main-box">
							<Box className="order-box-scroll">
								{order.orderItems?.map((item: OrderItem) => {
									const product: Product = order.productData.filter(
										(ele: Product) => item.productId === ele._id
									)[0];
									const imagePath = `${serverApi}/${product.productImages[0]}`;
									return (
										<Box key={item._id} className="orders-name-price">
											<img src={imagePath} className="order-dish-img" />
											<p className="title-dish">{product.productName}</p>
											<Box className="price-box">
												<p>${item.itemPrice}</p>
												<img src={"/img/icon/close.svg"} />
												<p>{item.itemQuantity}</p>
												<img src={"/img/icon/pause.svg"} />
												<p style={{ marginLeft: "15px" }}>
													${item.itemQuantity * item.itemPrice}
												</p>
											</Box>
										</Box>
									);
								})}
							</Box>

							<Box className="total-price-box">
								<Box className="box-total">
									<p>Product price</p>
									<p>${order.orderTotal - order.orderDelivery}</p>
									<img src={"/img/icon/plus.svg"} style={{ marginLeft: "0px" }} />
									<p>Delivery cost</p>
									<p>${order.orderDelivery}</p>
									<img src={"/img/icon/pause.svg"} style={{ marginLeft: "0px" }} />
									<p>Total</p>
									<p>${order.orderTotal}</p>
								</Box>
								<p className="data-compl-finish">
									{moment().format("YY-MM-DD HH:mm")}
								</p>
							</Box>
						</Box>
					);
				})}
				{!finishedOrders ||
					(finishedOrders.length === 0 && (
						<Box
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"center"}>
							<img
								src={"/img/icon/noimage-list.svg"}
								style={{ width: 300, height: 300 }}
							/>
						</Box>
					))}
			</Stack>
		</TabPanel>
	);
}
