import "./checkout-item.styles.scss";

export default function CheckoutItem({
  item: { name, imageUrl, price, quantity },
}) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
}
