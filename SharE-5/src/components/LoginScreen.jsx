import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useState } from "react";

function LoginScreen(props) {
  const [signed, setSigned] = useState(false);
  const signer = () => {
    props.situ();
  };
  const toSignPage = () => {
    setSigned(false);
  };
  const toTrue = () => {
    setSigned(true);
  };
  return (
    <div className="login">
      {signed ? (
        <LoginPage fonk={signer} fonk2={toSignPage} />
      ) : (
        <SignupPage fonk={signer} fonk2={toTrue} />
      )}
    </div>
  );
}

export default LoginScreen;
