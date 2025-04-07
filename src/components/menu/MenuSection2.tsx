import { useCafeuContext } from "../../context/CafeuContext";
import { productList } from "../../data/Data";
import { Link } from "react-router-dom";

type Props = {
  style: string;
  title: string;
  startIndex: number;
  endIndex: number;
};
const MenuSection2 = ({ style, title, startIndex, endIndex }: Props) => {
  const { addToCart } = useCafeuContext();
  return (
    <section>
      <div className={style}>
        <div className="ad-offer-title-container">
          <img src="/img/aida-images/service-icon.png" alt="" />
          <h4 className="ad-title-text">{title}</h4>
        </div>
        <div className="container ad-offer-container">
          <div className="row g-4">
            {productList.slice(startIndex, endIndex).map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div className="ad-offer-single-card">
                  <Link
                    className="ad-menu-img-container"
                    to={`/shop/${item.slug}`}
                  >
                    <img src={item.imgSrc} alt="" />
                  </Link>
                  <div className="ad-offer-single-card-header-container">
                    <Link
                      to={`/shop/${item.slug}`}
                      className="ad-offer-card-text-container"
                    >
                      <h5>{item.name}</h5>
                      <div className="d-flex gap-2 align-items-center">
                        <span className="ad-offer-price">
                          {" "}
                          ${item.price < 10 ? "0" + item.price : item.price}
                        </span>
                      </div>
                    </Link>
                    <p>{item.desc}</p>
                    <a role="button" onClick={() => addToCart(item.id)}>
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection2;
