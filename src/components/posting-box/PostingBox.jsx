import "./postingBox.css";

// * Material Icons
import {
  InsertPhotoRounded,
  VideocamRounded,
  LocalActivityRounded,
  EmojiEmotionsRounded,
} from "@mui/icons-material";

export default function PostingBox() {
  return (
    <section className="postingBox">
      <div className="upperBoxSide">
        <img
          src="/assets/person/person1.jpg"
          alt="user"
          className="userImage"
        />
        <input
          type="text"
          placeholder="What's on your mind? Muhammad Nabeel"
          readOnly
        />
      </div>

      <div className="lowerBoxSide">
        <span className="postingOption">
          <InsertPhotoRounded className="optIcon" /> Photo
        </span>

        <span className="postingOption">
          <VideocamRounded className="optIcon" /> Video
        </span>

        <span className="postingOption">
          <LocalActivityRounded className="optIcon" /> Activity
        </span>

        <span className="postingOption">
          <EmojiEmotionsRounded className="optIcon" /> Feelings
        </span>
      </div>
    </section>
  );
}
