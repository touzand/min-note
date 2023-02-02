import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Notification from "../components/Notification";

const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  const { googleSigIn, user, SignInWithEmail, signInError, googleSignError } =
    userAuth();

  const handdleSignInWithGoogle = async () => {
    try {
      await googleSigIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handdleSignInWithEmail = async (e) => {
    e.preventDefault();
    try {
      await SignInWithEmail(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <SignInContainer>
      <Loader start=".3s" />
      <Link to="/home">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </Link>
      {signInError && <Notification>{signInError}</Notification>}
      {googleSignError && <Notification>{googleSignError}</Notification>}
      <div className="signin-form">
        <h3>Welcom back</h3>
        <form onSubmit={handdleSignInWithEmail}>
          <div className="input">
            <span className="material-symbols-outlined">mail</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <span className="material-symbols-outlined">vpn_key</span>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Sig in" className="submit-button" />
        </form>
      </div>
      <div className="subsection">
        <div className="hr-sect">Or</div>
        <GoogleButton onClick={handdleSignInWithGoogle} />
        <p>
          Dont have an account yet? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </SignInContainer>
  );
};

export default SignIn;
