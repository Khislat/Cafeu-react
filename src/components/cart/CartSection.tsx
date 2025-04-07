import ProductTable from "../table/ProductTable";
import CouponSection from "./CouponSection";
import { useCafeuContext } from "../../context/CafeuContext";

const CartSection = () => {
  const { cart, removeFromCart,  } = useCafeuContext();
  return (
    <>
      <ProductTable array={cart} removeItem={removeFromCart} cartTable={true} />
      <CouponSection />
    </>
  );
};

export default CartSection;
