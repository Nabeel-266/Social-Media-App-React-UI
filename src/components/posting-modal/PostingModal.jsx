import "./postingModal.css";

// * Material Icons
import {
  ClearRounded,
  SentimentSatisfiedRounded,
  InsertPhotoRounded,
  VideocamRounded,
  LocalActivityRounded,
  EmojiEmotionsRounded,
  SellRounded,
} from "@mui/icons-material";

export default function PostingModal() {
  return (
    <div className="modalOverlay">
      <div className="postModal">
        <header className="modalHeader">
          <h2>Create Post</h2>
          <button className="closeModalBtn">
            <ClearRounded className="closeIcon" />
          </button>
        </header>

        <section className="modalMiddle">
          <div className="postUser">
            <img
              src="/assets/person/person1.jpg"
              alt="User"
              className="postUserImage"
            />
            <div className="postUserName">
              <h6>Muhammad Nabeel</h6>
              <span>Post to Anyone</span>
            </div>
          </div>

          <div className="postTextArea">
            <textarea
              className="textArea"
              placeholder="What do you want to write about?"
              rows="10"></textarea>
          </div>

          <div className="postAddEmoji">
            <SentimentSatisfiedRounded className="emoji" />
          </div>

          <div className="postAddMedia">
            <h6>Add to your post</h6>

            <div className="mediaOptions">
              <abbr title="Photo">
                <InsertPhotoRounded className="mediaIcon" />
              </abbr>

              <abbr title="Video">
                <VideocamRounded className="mediaIcon" />
              </abbr>

              <abbr title="Activity">
                <LocalActivityRounded className="mediaIcon" />
              </abbr>

              <abbr title="Tag People">
                <SellRounded className="mediaIcon" />
              </abbr>

              <abbr title="Feelings">
                <EmojiEmotionsRounded className="mediaIcon" />
              </abbr>
            </div>
          </div>
        </section>

        <footer className="modalFooter">
          <button className="postBtn">Post</button>
        </footer>
      </div>
    </div>
  );
}
