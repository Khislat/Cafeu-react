import ShopTopSortingSection from "./ShopTopSortingSection";
import ShopAllProductSection from "./ShopAllProductSection";
import ShopSearchBarSection from "./ShopSearchBarSection";
import ShopCategorySidebar from "./ShopCategorySidebar";
import ShopPopularProductSection from "./ShopPopularProductSection";
import ShopTagFilter from "./ShopTagFilter";
import ProductLightBoxModal from "../modal/ProductLightBoxModal";

const ShopSection = () => {
  return (
    <div className="shop-area pt-105 pb-55">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="shop-left-wrapper">
              <ShopTopSortingSection />
              <ShopAllProductSection />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-default pl-25">
              <ShopSearchBarSection />
              <ShopCategorySidebar />
              <ShopPopularProductSection />
          
              <ShopTagFilter />
            </div>
          </div>
        </div>
      </div>
      <ProductLightBoxModal />
    </div>
  );
};

export default ShopSection;
