import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import OrderService from '../../services/OrderService';
import useBasket from '../hooks/useBasket';
import { useGlobals } from '../hooks/useGlobals';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../../libs/types/search';
import { Messages, serverApi } from '../../../libs/config';
import { sweetErrorHandling } from '../../../libs/sweetAlert';
interface BasketProps {
	cartItems: CartItem[];
	onAdd: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	onDelete: (item: CartItem) => void;
	onDeleteAll: () => void;
}

export default function Basket(props: BasketProps) {
	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

	const { authMember, setOrderBuilder } = useGlobals();
	const navigate = useNavigate();
	const itemsPrice: number = cartItems.reduce((a: number, c: CartItem) => a + c.quantity * c.price, 0);

	const shippingCost = itemsPrice < 100 ? 5 : 0;
	const totalPrice = (itemsPrice + shippingCost).toFixed(1);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	/** HANDLERS **/
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const proceedOrderHandlear = async () => {
		try {
			handleClose();
			if (!authMember) throw new Error(Messages.error2);

			const order = new OrderService();
			await order.createOrder(cartItems);

			onDeleteAll();

			setOrderBuilder(new Date());
			navigate('/orders');
		} catch (err) {
			console.log(err);
			sweetErrorHandling(err).then();
		}
	};

	return (
		<Box className={'hover-line'}>
			<IconButton
				aria-label="cart"
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Badge badgeContent={cartItems.length} color="secondary">
					<ShoppingCartIcon color="action" />
				</Badge>
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				// onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<Stack className={'basket-frame'}>
					<Box className={'all-check-box'}>
						{cartItems.length === 0 ? (
							<div>Cart is empty!</div>
						) : (
							<Stack flexDirection={'row'}>
								<div>Cart Products!</div>
								<DeleteForeverIcon
									sx={{ ml: '5px', cursor: 'pointer' }}
									color={'primary'}
									onClick={() => onDeleteAll()}
								/>
							</Stack>
						)}
					</Box>

					<Box className={'orders-main-wrapper'}>
						<Box className={'orders-wrapper'}>
							{cartItems.map((item: CartItem) => {
								const imagePath = `${serverApi}/${item.image}`;
								return (
									<Box className={'basket-info-box'} key={item._id}>
										<div className={'cancel-btn'}>
											<IconButton
												onClick={() => onDelete(item)}
												color="primary"
												size="small"
												sx={{
													position: 'absolute',
													top: -2,
													right: 5,
													backgroundColor: '#e3f2fd', // och ko‘k fon
													'&:hover': {
														backgroundColor: '#bbdefb', // hoverda biroz to‘qroq ko‘k
													},
												}}
											>
												<CancelIcon fontSize="small" />
											</IconButton>
										</div>
										<img src={imagePath} className={'product-img'} />
										<span className={'product-name'}>{item.name}</span>
										<p className={'product-price'}>
											${item.price} x {item.quantity}
										</p>
										<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
											<IconButton
												onClick={() => onRemove(item)}
												color="primary"
												size="small"
												sx={{ border: '1px solid #ccc' }}
											>
												<RemoveIcon />
											</IconButton>

											<span>{item.quantity}</span>

											<IconButton
												onClick={() => onAdd(item)}
												color="primary"
												size="small"
												sx={{ border: '1px solid #ccc' }}
											>
												<AddIcon />
											</IconButton>
										</Box>
									</Box>
								);
							})}
						</Box>
					</Box>
					{cartItems.length !== 0 ? (
						<Box className={'basket-order'}>
							<span className={'price'}>
								Total: ${totalPrice} ({itemsPrice} + {shippingCost})
							</span>
							<Button onClick={proceedOrderHandlear} startIcon={<ShoppingCartIcon />} variant={'contained'}>
								Order
							</Button>
						</Box>
					) : (
						''
					)}
				</Stack>
			</Menu>
		</Box>
	);
}
