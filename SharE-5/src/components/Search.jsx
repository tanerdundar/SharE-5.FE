import { useState } from "react";
import Profile from "./Profile";

function Search() {
  const [statu, setStatu] = useState(true);
  const statuHandler = () => {
    setStatu(false);
  };
  return (
    <>
      {statu ? (
        <div id="search" className="search">
          <div className="search-inside">
            <input className="inputer" type="text" placeholder="text here..." />
            <button onClick={statuHandler} className="get-button">
              Search
            </button>
          </div>
        </div>
      ) : (
        <Profile isMe={false} />
      )}
    </>
  );
}

export default Search;
