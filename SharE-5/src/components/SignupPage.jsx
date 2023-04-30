import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

library.add(faUser, faLock, faEnvelope);

function SignupPage(props) {
  const [wrongName, setWrongName] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPasword] = useState(false);
  const [userAlert, setUserAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
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
    setWrongName(false);
    setWrongPasword(false);
    setWrongEmail(false);
    const userNameResult = await checkUserName();
    const emailResult = await chackEmail();
    const passwordResult = await checkPassword();
    setEmailAlert("");
    setPasswordAlert("");
    setUserAlert("");
    if (userNameResult || userNameInputValue.length < 5) {
      if (userNameResult) {
        setUserAlert("Existing user name!..");
      }
      if (userNameInputValue.length < 5) {
        setWrongName(true);
        setUserAlert("We need at least five character...");
      }
    } else {
      if (emailResult || checkMailFormat()) {
        if (checkMailFormat()) {
          setWrongEmail(true);
          setEmailAlert("Please type a valid email...");
        } else if (emailResult) {
          setEmailAlert("There is already a user with this email.");
        }
      } else {
        if (passwordResult || passwordInputValue.length < 6) {
          if (passwordResult) {
            setPasswordAlert("Different passwords");
          }
          if (passwordInputValue.length < 6) {
            setWrongPasword(true);
            setPasswordAlert("We need at least six character...");
          }
        } else {
          createUser(userNameInputValue, emailInputValue, passwordInputValue);
          props.fonk();
        }
      }
    }
    if (userNameResult) {
      setWrongName(true);
    }
    if (emailResult) {
      setWrongEmail(true);
    }
    if (passwordResult) {
      setWrongPasword(true);
    }
  };

  const createUser = async (
    userNameInputValue,
    emailInputValue,
    passwordInputValue
  ) => {
    const createdUser = {
      userName: userNameInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };
    const response = await axios.post(
      "http://localhost:8080/api/users",
      createdUser
    );
  };

  const checkMailFormat = () => {
    let result = true;
    const email = emailInputValue;
    const pattern = /@gmail\.com$/;

    if (pattern.test(email)) {
      result = false;
    }
    return result;
  };
  const checkUserName = async () => {
    let situ = false;
    const response = await axios.get("http://localhost:8080/api/users/all");
    let usersArray = response.data;
    setUsers(usersArray);
    let newUser = usersArray.filter((e) => {
      return e.userName == userNameInputValue;
    });
    if (newUser.length > 0) {
      situ = true;
    }
    return situ;
  };
  const chackEmail = async () => {
    let situ = false;
    const response = await axios.get("http://localhost:8080/api/users/all");
    let usersArray = response.data;
    setUsers(usersArray);
    let newUser = usersArray.filter((e) => {
      return e.email == emailInputValue;
    });
    if (newUser.length > 0) {
      situ = true;
    }
    return situ;
  };
  const checkPassword = () => {
    if (passwordInputValue == repasswordInputValue) {
      return false;
    } else {
      return true;
    }
  };

  const userNameInputValueChanger = (e) => {
    setUserNameInputValue(e.target.value);
    setWrongName(false);
  };
  const emailInputValueChanger = (e) => {
    setEmailInputValue(e.target.value);
    setWrongEmail(false);
  };
  const passwordInputValueChanger = (e) => {
    setPasswordInputValue(e.target.value);
    setWrongPasword(false);
  };
  const repeatPasswordInputValueChanger = (e) => {
    setRepasswordInputValue(e.target.value);
    setWrongPasword(false);
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
      {wrongName ? (
        <div className="wrong">{userAlert}</div>
      ) : (
        <div className="wrong-empty"></div>
      )}
      <div className="signup-user">
        <FontAwesomeIcon className="icons" icon={["faS", "envelope"]} />
        <input
          className="signup input"
          type="text"
          onChange={emailInputValueChanger}
          placeholder="email "
        />
      </div>
      {wrongEmail ? (
        <div className="wrong email">{emailAlert}</div>
      ) : (
        <div className="wrong-empty"></div>
      )}
      <div className="signup-user">
        <FontAwesomeIcon className="icons" icon={["faS", "lock"]} />
        <input
          className="signup input"
          type="password"
          onChange={passwordInputValueChanger}
          placeholder="password"
        />
      </div>
      {wrongPassword ? (
        <div className="wrong">{passwordAlert}</div>
      ) : (
        <div className="wrong-empty"></div>
      )}
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
