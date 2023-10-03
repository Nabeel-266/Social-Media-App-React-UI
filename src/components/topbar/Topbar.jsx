import "./topbar.css";
import {
  TagRounded,
  SearchRounded,
  HomeTwoTone,
  ViewTimelineTwoTone,
  MessageTwoTone,
  NotificationsTwoTone,
  PersonRounded,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <TagRounded className="logoIcon" />
        <span className="logoText">SocialVibes</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <SearchRounded className="searchIcon" />
          <input
            type="search"
            className="searchInput"
            name="search"
            id="search"
            placeholder="Search Here..."
            autoComplete="off"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="tbrIcon">
            <abbr title="Home">
              <HomeTwoTone className="icon" />
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Timeline">
              <ViewTimelineTwoTone className="icon" />
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Message">
              <MessageTwoTone className="icon" />
              <span className="badge">99+</span>
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Notification">
              <NotificationsTwoTone className="icon" />
              <span className="badge">99+</span>
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Profile">
              {true ? (
                <img src="/assets/person1.jpg" alt="" />
              ) : (
                <PersonRounded className="icon" />
              )}
            </abbr>
          </div>
        </div>
      </div>
    </div>
  );
}
