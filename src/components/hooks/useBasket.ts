// import { useState } from 'react';
// import { CartItem } from '../../../libs/types/search';

// const useBasket = () => {
// 	const cartJson: string | null = localStorage.getItem('cartData');
// 	const currentCart = cartJson ? JSON.parse(cartJson) : [];
// 	const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);
// 	const onAdd = (input: CartItem) => {
// 		console.log('input:', input);
// 		const exist: any = cartItems.find((item: CartItem) => item._id === input._id);
// 		if (exist) {
// 			const cartUpdate = cartItems.map((item: CartItem) =>
// 				item._id === input._id ? { ...exist, quantity: exist.quantity + 1 } : item,
// 			);
// 			setCartItems(cartUpdate);
// 			localStorage.setItem('cartData', JSON.stringify(cartUpdate));
// 		} else {
// 			const cartUpdate = [...cartItems, { ...input }];
// 			setCartItems(cartUpdate);
// 			localStorage.setItem('cartData', JSON.stringify(cartUpdate));
// 		}
// 	};
// 	const onRemove = (input: CartItem) => {
// 		const exist: any = cartItems.find((item: CartItem) => item._id === input._id);
// 		if (exist.quantity === 1) {
// 			const cartUpdate = cartItems.filter((item: CartItem) => item._id !== input._id);
// 			setCartItems(cartUpdate);
// 			localStorage.setItem('cartData', JSON.stringify(cartUpdate));
// 		} else {
// 			const cartUpdate = cartItems.map((item: CartItem) =>
// 				item._id === input._id ? { ...exist, quantity: exist.quantity - 1 } : item,
// 			);
// 			setCartItems(cartUpdate);
// 			localStorage.setItem('cartData', JSON.stringify(cartUpdate));
// 		}
// 	};

// 	const onDelete = (input: CartItem) => {
// 		const cartUpdate = cartItems.filter((item: CartItem) => item._id !== input._id);
// 		setCartItems(cartUpdate);
// 		localStorage.setItem('cartData', JSON.stringify(cartUpdate));
// 	};

// 	const onDeleteAll = () => {
// 		setCartItems([]);
// 		localStorage.removeItem('cartData');
// 	};

// 	return {
// 		cartItems,
// 		onAdd,
// 		onRemove,
// 		onDelete,
// 		onDeleteAll,
// 	};
// };

// export default useBasket;
import { useState, useEffect } from 'react';
import { CartItem } from '../../../libs/types/search';

// 전역 상태 관리를 위한 이벤트 시스템
const CART_UPDATED_EVENT = 'cartUpdated';

const useBasket = () => {
  // 함수를 사용하여 항상 최신 로컬 스토리지 데이터 가져오기
  const getStoredCart = () => {
    if (typeof window === 'undefined') return [];
    
    const cartJson = localStorage.getItem('cartData');
    return cartJson ? JSON.parse(cartJson) : [];
  };

  const [cartItems, setCartItems] = useState<CartItem[]>(getStoredCart);

  // 컴포넌트 마운트 시 이벤트 리스너 등록
  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(getStoredCart());
    };

    // 다른 컴포넌트에서 발생한 장바구니 업데이트 이벤트 감지
    window.addEventListener(CART_UPDATED_EVENT, handleStorageChange);
    
    // 로컬 스토리지 변경 감지 (다른 탭/창에서 변경된 경우)
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

  // 로컬 스토리지 업데이트 및 이벤트 발생 함수
  const updateCartAndNotify = (newCart: CartItem[]) => {
    localStorage.setItem('cartData', JSON.stringify(newCart));
    setCartItems(newCart);
    
    // 다른 컴포넌트에 장바구니 업데이트를 알림
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  };

  const onAdd = (input: CartItem) => {
    console.log('input:', input);
    
    // 항상 최신 카트 데이터 가져오기
    const currentCart = getStoredCart();
    const exist = currentCart.find((item: CartItem) => item._id === input._id);
    
    let updatedCart;
    
    if (exist) {
      updatedCart = currentCart.map((item: CartItem) =>
        item._id === input._id ? { ...exist, quantity: exist.quantity + 1 } : item
      );
    } else {
      updatedCart = [...currentCart, { ...input, quantity: 1 }];
    }
    
    // 상태 업데이트 및 이벤트 발생
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
        item._id === input._id ? { ...exist, quantity: exist.quantity - 1 } : item
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