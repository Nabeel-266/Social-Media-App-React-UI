import "./topbar.css";

// * Material Icons
import {
  TagRounded,
  SearchRounded,
  HomeRounded,
  ViewTimelineRounded,
  MessageRounded,
  NotificationsRounded,
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
              <HomeRounded className="icon" />
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Timeline">
              <ViewTimelineRounded className="icon" />
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Chats">
              <MessageRounded className="icon" />
              <span className="badge">99+</span>
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Notifications">
              <NotificationsRounded className="icon" />
              <span className="badge">99+</span>
            </abbr>
          </div>

          <div className="tbrIcon">
            <abbr title="Profile">
              {true ? (
                <img src="/assets/person/person1.jpg" alt="User" />
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
