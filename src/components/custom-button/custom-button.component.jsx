import "./custom-button.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-signin"}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
