import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "./../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

function CheckoutItem({ item, addItem, removeItem, clearItem }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </button>
        {quantity}
        <button className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </button>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
