import ProductTable from "../table/ProductTable";
import PartnerSection from "../partner/PartnerSection";
import { useCafeuContext } from "../../context/CafeuContext";

const WishlistSection = () => {
  const { wishlist, removeFromWishlist } = useCafeuContext();
  return (
    <>
      <ProductTable
        array={wishlist}
        removeItem={removeFromWishlist}
        cartTable={false}
      />
      <PartnerSection />
    </>
  );
};

export default WishlistSection;
