import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Search from "./components/Search";
import FlowOfSearch from "./components/FlowOfSearch";
import Flow from "./components/Flow";
import FlowOfProfile from "./components/FlowOfProfile";

function App() {
  const [flow, setFlow] = useState(true);
  const [whichFlow, setWhichFlow] = useState(true);
  const clickToSearch = () => {
    setFlow(false);
    setWhichFlow(false);
  };
  const clickToProfile = () => {
    setFlow(false);
    setWhichFlow(true);
  };
  const clickToRefresh = () => {
    setFlow(true);
    setWhichFlow(true);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <button onClick={clickToRefresh}>Refresh</button>
        <button onClick={clickToProfile}>toPrfile</button>
        <button onClick={clickToSearch}>to Search</button>
        <Profile />
        {flow ? <Flow /> : whichFlow ? <FlowOfProfile /> : <FlowOfSearch />}
        <Search />
      </div>
    </div>
  );
}

export default App;
