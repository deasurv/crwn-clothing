import "./custom-button.styles.scss";

export default function CustomButton({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${inverted && "inverted"} ${
        isGoogleSignIn && "google-signin"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
