import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

library.add(faUser, faLock);

function LoginPage(props) {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userNameInputValue, setUserNameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [wrong, setWrong] = useState(false);

  const userNameInputValueChanger = (e) => {
    setUserNameInputValue(e.target.value);
    setWrong(false);
  };
  const passwordInputValueChanger = (e) => {
    setPasswordInputValue(e.target.value);
    setWrong(false);
  };
  const clickHandler = async () => {
    setWrong(false);
    const response = await axios.get("http://localhost:8080/api/users/all");
    let usersArray = response.data;
    setUsers(usersArray);
    let newUser = usersArray.find((e) => {
      return e.userName == userNameInputValue;
    });
    if (newUser !== undefined) {
      setLoggedUser(newUser);
      if (newUser.password == passwordInputValue) {
        props.fonk();
        // props.fonk(newUser);
      } else {
        setWrong(true);
      }
    } else {
      setWrong(true);
    }
  };

  const handleClick = () => {
    props.fonk2();
  };
  return (
    <div className="login-page">
      <div className="login-user">
        <FontAwesomeIcon className="icons" icon={["faS", "user"]} />
        <input
          type="text"
          placeholder="user name please..."
          value={userNameInputValue}
          onChange={userNameInputValueChanger}
        />
      </div>

      {wrong ? (
        <div className="wrong">Wrong user name or password!..</div>
      ) : (
        <div className="wrong-empty"></div>
      )}
      <div className="login-lock">
        <FontAwesomeIcon className="icons" icon={["faS", "lock"]} />

        <input
          type="password"
          placeholder="password please..."
          value={passwordInputValue}
          onChange={passwordInputValueChanger}
        />
      </div>
      <button
        className="login-button"
        style={{ cursor: "pointer" }}
        onClick={clickHandler}
      >
        Log in
      </button>
      <p
        onClick={handleClick}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Don't have account yet?
      </p>
    </div>
  );
}

export default LoginPage;
