import SignIn from "./../../components/sign-in/sign-in.component";
import SignUp from "./../../components/sign-up/sign-up.component";
import "./signpage.styles.scss";

export default function SignPage() {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
}
