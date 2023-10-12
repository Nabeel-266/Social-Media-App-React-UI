import "./auth.css";
import SignIn from "../../components/signIn/SignIn";
import { useState } from "react";
import SignUp from "../../components/signUp/SignUp";

export default function Auth() {
  const [authState, setAuthState] = useState(true);
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <section className="subContLeft">
          <div className="subContLeftWrapper">
            <h5>Welcome To</h5>
            <h1>Social Vibes</h1>
            <p>
              Connect the friends and the world around you on #Social Vibes.
            </p>
          </div>
        </section>

        <section className="subContRight">
          <SignIn authState={authState} setAuthState={setAuthState} />
          <SignUp authState={authState} setAuthState={setAuthState} />
        </section>
      </div>
    </div>
  );
}
