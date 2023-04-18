import Numbers from "./Numbers";
import MiniProfile from "./MiniProfile";

function Profile() {
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
      <MiniProfile />
    </div>
  );
}

export default Profile;
