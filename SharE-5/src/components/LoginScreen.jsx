import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useState } from "react";

function LoginScreen(props) {
  const [signed, setSigned] = useState(false);
  const signer = () => {
    props.situ();
  };
  const toSignPage = () => {
    setSigned(!signed);
  };
  return (
    <div className="login">
      {signed ? (
        <SignupPage fonk={signer} fonk2={toSignPage} />
      ) : (
        <LoginPage fonk={signer} fonk2={toSignPage} />
      )}
    </div>
  );
}

export default LoginScreen;
