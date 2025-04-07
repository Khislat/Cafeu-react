import BreadcrumbSection from "../breadcrumb/BreadcrumbSection";
import MenuProducts from "./MenuProducts";
import { useCafeuContext } from "../../context/CafeuContext";
import ProductLightBoxModal from "../modal/ProductLightBoxModal";

const MenuPageSection = () => {
  const { menuItemsToShow } = useCafeuContext();
  return (
    <>
      <BreadcrumbSection header="Menu Page" title="Menu" />
      <MenuProducts
        style="menu-product"
        showMoreBtn={true}
        endIndex={menuItemsToShow}
      />
      <ProductLightBoxModal />
    </>
  );
};

export default MenuPageSection;
