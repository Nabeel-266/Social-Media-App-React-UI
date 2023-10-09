import "./post.css";
import { allUsers } from "../../dummydata";
import { useState } from "react";

// * Material Icons
import {
  MoreHorizRounded,
  ThumbUpRounded,
  ThumbUpOutlined,
  ChatBubbleOutlineRounded,
  SendRounded,
} from "@mui/icons-material";

export default function Post({ post }) {
  const [likeCount, setLikeCount] = useState(post.like);
  const [commentCount, setCommentCount] = useState(post.comment);
  const [isLiked, setIsLiked] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");

  const { userId, image, desc, time } = post;

  // For Like Post
  const likeHandler = () => {
    setLikeCount((prvCount) => (isLiked ? prvCount - 1 : prvCount + 1));
    setIsLiked(!isLiked);
  };

  // For Comment Post
  const commentHandler = () => {
    setCommentCount((prvCount) => (comment ? prvCount + 1 : prvCount));
    setIsComment(false);
    setComment("");
    document.querySelector(".commentInput").value = "";
  };

  return (
    <>
      <div className="post">
        <section className="postTop">
          <div className="postTopLeft">
            <img
              src={allUsers.filter((user) => user.id === userId)[0].picture}
              alt=""
              className="postAuthorImage"
            />
            <div className="postInfo">
              <span className="postAuthorName">
                {allUsers.filter((user) => user.id === userId)[0].name}
              </span>
              <span className="postTime">{time}</span>
            </div>
          </div>

          <div className="postTopRight">
            <span>
              <MoreHorizRounded className="postOptionsIcon" />
            </span>
          </div>
        </section>

        <section className="postCenter">
          <span
            className="postText"
            style={desc ? { display: "block" } : { display: "none" }}>
            {desc ? desc : ""}
          </span>
          <img src={image} alt="post" className="postImage" />
        </section>

        <section className="postBottom">
          <div className="postBottomUp">
            <span className="likeInfo">
              <ThumbUpRounded className="likeIcon" />
              {likeCount}
            </span>

            <span className="commentInfo">{commentCount} comments</span>
          </div>

          <div className="postBottomMid">
            <button
              className="postBtn"
              style={isLiked ? { color: "#0053c0" } : { color: "#444" }}
              onClick={() => likeHandler()}>
              {isLiked ? (
                <ThumbUpRounded
                  className="postBtnIcon"
                  style={{ color: "#0053c0" }}
                />
              ) : (
                <ThumbUpOutlined
                  className="postBtnIcon"
                  style={{ color: "#444" }}
                />
              )}
              Like
            </button>
            <button
              className="postBtn"
              onClick={() => setIsComment(!isComment)}>
              <ChatBubbleOutlineRounded className="postBtnIcon commentIcon" />
              Comment
            </button>
          </div>

          {isComment ? (
            <div className="postBottomDown">
              <img
                src="/assets/person/person1.jpg"
                alt="user"
                className="commentUserImg"
              />
              <input
                type="text"
                className="commentInput"
                placeholder="Submit your comments here"
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="sendCommentBtn"
                onClick={() => commentHandler()}
                style={
                  comment ? { cursor: "pointer" } : { cursor: "not-allowed" }
                }>
                <SendRounded className="sendCommentIcon" />
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
}
