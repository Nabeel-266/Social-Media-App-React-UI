import "./userBio.css";

export default function UserBio() {
  return (
    <section className="userBio">
      <div className="coverPicture">
        <img src="/assets/coverPhoto.jpg" alt="coverPic" />
      </div>

      <div className="profilePicture">
        <img src="/assets/person/person1.jpg" alt="profilePic" />
      </div>

      <div className="userAbout">
        <h1 className="userName">Muhammad Nabeel</h1>
        <span className="userDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          quas voluptatibus? Iusto, assumenda tempore debitis id deleniti
          molestias dolorem recusandae et! Labore natus dicta amet a ex iste
          quam atque.
        </span>
      </div>
    </section>
  );
}
