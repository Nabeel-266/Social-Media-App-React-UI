import "./sidebar.css";
import { allUsers } from "../../dummydata";
import Follower from "../follower/Follower";

// * Material Icons
import {
  DynamicFeedRounded,
  MessageRounded,
  NotificationsRounded,
  PlayCircleFilledRounded,
  GroupsRounded,
  BookmarkRounded,
  EventRounded,
  WorkRounded,
  KeyboardArrowDownRounded,
  //   KeyboardArrowUpRounded
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebarWrapper">
        <nav className="sidebarNavigators">
          <ul className="navigatorsList">
            <li className="navigatorItem">
              <DynamicFeedRounded className="navigatorIcon" />
              <span className="navigatorText">Feeds</span>
            </li>

            <li className="navigatorItem">
              <MessageRounded className="navigatorIcon" />
              <span className="navigatorText">Chats</span>
            </li>

            <li className="navigatorItem">
              <PlayCircleFilledRounded className="navigatorIcon" />
              <span className="navigatorText">Videos</span>
            </li>

            <li className="navigatorItem">
              <GroupsRounded className="navigatorIcon" />
              <span className="navigatorText">Groups</span>
            </li>

            <li className="navigatorItem">
              <BookmarkRounded className="navigatorIcon" />
              <span className="navigatorText">Bookmarks</span>
            </li>

            <li className="navigatorItem">
              <NotificationsRounded className="navigatorIcon" />
              <span className="navigatorText">Notifications</span>
            </li>

            <li className="navigatorItem">
              <EventRounded className="navigatorIcon" />
              <span className="navigatorText">Events</span>
            </li>

            <li className="navigatorItem">
              <WorkRounded className="navigatorIcon" />
              <span className="navigatorText">Jobs</span>
            </li>
          </ul>

          <button className="seeNavigatorsBtn">
            <KeyboardArrowDownRounded className="btnIcon" />
            {/* <KeyboardArrowUpRounded className="btnIcon" /> */}
            See More
          </button>
        </nav>

        <section className="sidebarFollowers">
          <header className="sidebarFollowerHdr">
            <h2>Followers</h2>
            <span>{allUsers.length - 1}</span>
          </header>
          <ul className="followersList">
            {allUsers.map((user) => {
              return <Follower key={user.id} user={user} />;
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}
