import "./follower.css";

export default function Follower({ user }) {
  const { id, name, picture } = user;

  if (id !== 1) {
    return (
      <li className="eachFollower">
        <img src={picture} alt="follower" className="followerImage" />
        <span className="followerName">{name}</span>
      </li>
    );
  }
}
