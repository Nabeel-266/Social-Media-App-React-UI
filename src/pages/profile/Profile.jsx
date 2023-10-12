import "./profile.css";

// * Components
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import UserBio from "../../components/user-bio/UserBio";
import UserInfo from "../../components/user-info/UserInfo";

export default function Profile() {
  return (
    <div className="mainContainer">
      <Topbar />
      <div className="subContainer">
        <Sidebar />
        <div className="profileContainer">
          <div className="profileTop">
            <UserBio />
          </div>
          <div className="profileBottom">
            <Feed />
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
