import "./signIn.css";

export default function SignIn({ authState, setAuthState }) {
  return (
    <div
      className="signInArea"
      style={
        authState
          ? { transform: "translateX(0%)", transition: "0.5s" }
          : { transform: "translateX(105%)", transition: "0.5s" }
      }>
      <header className="signInHdr">
        <h2>Sign In</h2>
      </header>

      <form className="signInForm">
        <fieldset className="formFieldset">
          <div className="loginEmailField">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="loginEmail"
              id="loginEmail"
              placeholder="Email Address"
              autoComplete="off"
            />
          </div>

          <div className="loginPasswordField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              placeholder="Password"
            />
          </div>
        </fieldset>

        <button type="submit" className="SignInBtn">
          Log In
        </button>
      </form>

      <span className="forgotPassword">Forgotten Password?</span>

      <footer className="signUpSuggestion">
        <p>
          If you don't have an account?{" "}
          <span onClick={() => setAuthState(false)}>Sign Up</span>
        </p>
      </footer>
    </div>
  );
}
