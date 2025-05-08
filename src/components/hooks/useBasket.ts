import { useState, useEffect } from 'react';
import { CartItem } from '../../../libs/types/search';

const CART_UPDATED_EVENT = 'cartUpdated';

const useBasket = () => {
	const getStoredCart = () => {
		if (typeof window === 'undefined') return [];

		const cartJson = localStorage.getItem('cartData');
		return cartJson ? JSON.parse(cartJson) : [];
	};

	const [cartItems, setCartItems] = useState<CartItem[]>(getStoredCart);

	useEffect(() => {
		const handleStorageChange = () => {
			setCartItems(getStoredCart());
		};

		window.addEventListener(CART_UPDATED_EVENT, handleStorageChange);

		window.addEventListener('storage', (e) => {
			if (e.key === 'cartData') {
				handleStorageChange();
			}
		});

		return () => {
			window.removeEventListener(CART_UPDATED_EVENT, handleStorageChange);
			window.removeEventListener('storage', handleStorageChange);
		};
	}, []);

	const updateCartAndNotify = (newCart: CartItem[]) => {
		localStorage.setItem('cartData', JSON.stringify(newCart));
		setCartItems(newCart);

		window.dispatchEvent(new Event(CART_UPDATED_EVENT));
	};

	const onAdd = (input: CartItem) => {
		console.log('input:', input);

		const currentCart = getStoredCart();
		const exist = currentCart.find((item: CartItem) => item._id === input._id);

		let updatedCart;

		if (exist) {
			updatedCart = currentCart.map((item: CartItem) =>
				item._id === input._id ? { ...exist, quantity: exist.quantity + 1 } : item,
			);
		} else {
			updatedCart = [...currentCart, { ...input, quantity: 1 }];
		}

		updateCartAndNotify(updatedCart);
	};

	const onRemove = (input: CartItem) => {
		const currentCart = getStoredCart();
		const exist = currentCart.find((item: CartItem) => item._id === input._id);

		if (!exist) return;

		let updatedCart;

		if (exist.quantity === 1) {
			updatedCart = currentCart.filter((item: CartItem) => item._id !== input._id);
		} else {
			updatedCart = currentCart.map((item: CartItem) =>
				item._id === input._id ? { ...exist, quantity: exist.quantity - 1 } : item,
			);
		}

		updateCartAndNotify(updatedCart);
	};

	const onDelete = (input: CartItem) => {
		const currentCart = getStoredCart();
		const updatedCart = currentCart.filter((item: CartItem) => item._id !== input._id);
		updateCartAndNotify(updatedCart);
	};

	const onDeleteAll = () => {
		localStorage.removeItem('cartData');
		setCartItems([]);
		window.dispatchEvent(new Event(CART_UPDATED_EVENT));
	};

	return {
		cartItems,
		onAdd,
		onRemove,
		onDelete,
		onDeleteAll,
	};
};

export default useBasket;
