import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Flow from "./components/Flow";
import FlowOfProfile from "./components/FlowOfProfile";

function App() {
  const [isFlow, setIsFlow] = useState(true);

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Profile />
        {isFlow ? <Flow /> : <FlowOfProfile />}
        <Search />
      </div>
    </div>
  );
}

export default App;
