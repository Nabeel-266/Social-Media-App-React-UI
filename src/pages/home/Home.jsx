import "./home.css";

// * Components
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Home() {
  return (
    <div className="mainContainer">
      <Topbar />
      <div className="subContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
