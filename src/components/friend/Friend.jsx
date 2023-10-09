import "./friend.css";

export default function Friend({ user }) {
  const { id, name, picture } = user;

  if (id !== 1) {
    return (
      <li className="eachFriend">
        <img src={picture} alt="friend" className="friendImage" />
        <span className="friendName">{name}</span>
      </li>
    );
  }
}
