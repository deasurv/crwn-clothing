import CollectionItem from "./../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

export default function PreviewCollection({ title, items }) {
  return (
    <div className="preview-collection">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}
