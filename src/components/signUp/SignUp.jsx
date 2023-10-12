import "./signUp.css";

export default function SignUp({ authState, setAuthState }) {
  return (
    <div
      className="signUpArea"
      style={
        authState
          ? { transform: "translateX(105%)", transition: "0.5s" }
          : { transform: "translateX(0%)", transition: "0.5s" }
      }>
      <header className="signUpHdr">
        <h2>Sign Up</h2>
      </header>

      <form className="signUpForm">
        <fieldset className="formFieldset">
          <div className="nameFields">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              autoComplete="off"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              autoComplete="off"
            />
          </div>

          <div className="emailField">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              autoComplete="off"
            />
          </div>

          <div className="passwordFields">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="otherFields">
            <input type="date" name="dateOfBirth" id="dateOfBirth" />

            <select name="gender" id="gender">
              <option value="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </fieldset>

        <button type="submit" className="SignUpBtn">
          Sign Up
        </button>
      </form>

      <footer className="signInSuggestion">
        <p>
          If you have already an account?{" "}
          <span onClick={() => setAuthState(true)}>Sign In</span>
        </p>
      </footer>
    </div>
  );
}
