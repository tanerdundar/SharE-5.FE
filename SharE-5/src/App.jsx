import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Flow from "./components/Flow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Profile />
        <Flow />
        <Search />
      </div>
    </div>
  );
}

export default App;
