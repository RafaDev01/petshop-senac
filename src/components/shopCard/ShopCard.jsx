import "./ShopCard.css";
import { Heart } from "akar-icons";
import produtoImg from "../../assets/baixados.webp";

const ShopCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <img src={produtoImg} alt={product.name} />
      </div>
      <div className="card-info">
        <div>
          <p>{product.name}</p>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <button className="cart-button">
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
