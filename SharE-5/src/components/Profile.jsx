import Numbers from "./Numbers";
import MiniProfile from "./MiniProfile";
import { useState } from "react";
import Follow from "./Follow";

function Profile(props) {
  const [isMe, setIsMe] = useState(props.isMe);
  return (
    <div id="profile" className="profile">
      <div className="profile-photo"></div>
      <div className="content">
        {/* <div className="contents posts"></div>
        <div className="contents following"></div>
        <div className="contents follower"></div> */}
        <Numbers text="Posts" />
        <Numbers text="Followers" />
        <Numbers text="Followings" />
      </div>

      {isMe ? <MiniProfile /> : <Follow />}
    </div>
  );
}

export default Profile;
