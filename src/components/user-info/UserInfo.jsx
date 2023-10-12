import "./userInfo.css";
import { allUsers } from "../../dummydata";

//* Material Icons
import {
  CalendarMonthRounded,
  FavoriteRounded,
  MapsHomeWorkRounded,
  LocationOnRounded,
  AccessTimeRounded,
} from "@mui/icons-material";

export default function UserInfo() {
  return (
    <aside className="userInfo">
      <div className="intro">
        <h3>Intro</h3>

        <span>
          <CalendarMonthRounded className="introIcon" /> Born in
          <strong>June 2000</strong>
        </span>

        <span>
          <FavoriteRounded className="introIcon" /> Relation
          <strong>Single</strong>
        </span>

        <span>
          <MapsHomeWorkRounded className="introIcon" /> Lives in
          <strong>Jeddah, Saudi Arabia</strong>
        </span>

        <span>
          <LocationOnRounded className="introIcon" /> From
          <strong>Karachi, Pakistan</strong>
        </span>

        <span>
          <AccessTimeRounded className="introIcon" /> Joined
          <strong>September 2014</strong>
        </span>
      </div>

      <div className="friends">
        <div className="friendHeading">
          <h3>Friends</h3>
          <span>{allUsers.length - 1}</span>
        </div>

        <div className="friendsArea">
          {allUsers.map((user) => {
            return <EachFriend key={user.id} user={user} />;
          })}
        </div>
      </div>
    </aside>
  );
}

function EachFriend({ user }) {
  const { id, name, picture } = user;

  if (id !== 1) {
    return (
      <div className="eachFriend">
        <img src={picture} alt="Friend" />
        <span>{name}</span>
      </div>
    );
  }
}
