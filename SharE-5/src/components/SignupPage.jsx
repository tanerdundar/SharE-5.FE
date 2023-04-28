import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

library.add(faUser, faLock, faEnvelope);

function SignupPage(props) {
  const [userNameInputValue, setUserNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [repasswordInputValue, setRepasswordInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [checkedUser, setCheckedUser] = useState("");

  const clickHandler = () => {
    props.fonk();
  };
  const handleClick = () => {
    props.fonk2();
  };
  const checkInfos = async () => {
    const userNameResult = await checkUserName();
    const emailResult = userNameResult
      ? await chackEmail()
      : existingUserAlert();
    const passwordResult = emailResult
      ? await checkPassword()
      : existingEmailAlert();
  };

  const checkUserName = async () => {
    let situ = true;
    const response = await axios.get("http://localhost:8080/api/users/all");
    let usersArray = response.data;
    setUsers(usersArray);
    let newUser = usersArray.filter((e) => {
      return e.userName == userNameInputValue;
    });
    if (newUser.length > 0) {
      situ = false;
    }
    return situ;
  };
  const chackEmail = () => {
    let situ = true;
    let newUser = users.filter((e) => {
      return e.eMail == emailInputValue;
    });
    setCheckedUser(newUser[0]);
    if (newUser.length > 0) {
      situ = false;
    }
    return situ;
  };
  const checkPassword = () => {
    if (passwordInputValue != repasswordInputValue) {
      console.log("different passwords");
      return false;
    } else {
      return true;
    }
  };

  const existingUserAlert = () => {
    console.log("Existing user name.");

    return false;
  };
  const existingEmailAlert = () => {
    console.log("There is already a user with this email.");
    return false;
  };
  const userNameInputValueChanger = (e) => {
    setUserNameInputValue(e.target.value);
  };
  const emailInputValueChanger = (e) => {
    setEmailInputValue(e.target.value);
  };
  const passwordInputValueChanger = (e) => {
    setPasswordInputValue(e.target.value);
  };
  const repeatPasswordInputValueChanger = (e) => {
    setRepasswordInputValue(e.target.value);
  };
  return (
    <div className="signup-page">
      <div className="signup-user ">
        <FontAwesomeIcon className="icons" icon={["faS", "user"]} />
        <input
          className="signup input"
          type="text"
          onChange={userNameInputValueChanger}
          placeholder="user name"
          value={userNameInputValue}
        />
      </div>
      <div className="signup-user">
        <FontAwesomeIcon className="icons" icon={["faS", "envelope"]} />
        <input
          className="signup input"
          type="text"
          onChange={emailInputValueChanger}
          placeholder="email "
        />
      </div>
      <div className="signup-user">
        <FontAwesomeIcon className="icons" icon={["faS", "lock"]} />
        <input
          className="signup input"
          type="password"
          onChange={passwordInputValueChanger}
          placeholder="password"
        />
      </div>
      <div className="signup-user">
        <FontAwesomeIcon className="icons" icon={["faS", "lock"]} />
        <input
          className="signup input"
          type="password"
          onChange={repeatPasswordInputValueChanger}
          placeholder="repeat password"
        />
      </div>
      <button
        className="login-button"
        style={{ cursor: "pointer" }}
        onClick={checkInfos}
      >
        Sign up
      </button>
      <p
        onClick={handleClick}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Already have an account?
      </p>
    </div>
  );
}

export default SignupPage;
