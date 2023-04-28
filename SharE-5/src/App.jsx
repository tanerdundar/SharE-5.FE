import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Flow from "./components/Flow";
import FlowOfProfile from "./components/FlowOfProfile";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [isFlow, setIsFlow] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const logSetter = () => {
    setIsLogged(true);
  };

  return (
    <div className="App">
      <NavBar />
      {isLogged ? (
        <div className="main">
          <Profile isMe={true} />
          {isFlow ? <Flow /> : <FlowOfProfile />}
          <Search />
        </div>
      ) : (
        <div className="login-screen">
          <div className="left"></div>
          <LoginScreen situ={logSetter} />
          <div className="right"></div>
        </div>
      )}
    </div>
  );
}

export default App;
