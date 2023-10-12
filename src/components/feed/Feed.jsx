import "./feed.css";
import PostingBox from "../posting-box/PostingBox";
import Post from "../post/Post";
import { allPosts } from "../../dummydata";
// import PostingModal from "../posting-modal/PostingModal";

export default function Feed() {
  return (
    <section className="feedArea">
      <div className="feedWrapper">
        <PostingBox />
        <div className="allPosts">
          {allPosts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
        {/* <PostingModal /> */}
      </div>
    </section>
  );
}
