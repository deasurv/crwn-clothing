import "./menu-item.styles.scss";

export default function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
}
