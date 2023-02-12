import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import Notification from "../../components/Notification";
import {SignUpContainer} from "./style";

const SignUp = () => {
  const {
    user,
    CreateUserWithEmail,
    googleSigIn,
    createUserError,
    googleSignError,
  } = userAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handdleSignUpWithEmail = async (e) => {
    e.preventDefault();
    CreateUserWithEmail(email, password);
  };

  const handdleSignInWithGoogle = async () => {
    try {
      await googleSigIn();
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
    <SignUpContainer>
      {createUserError && <Notification final='error'>{createUserError}</Notification>}
      {googleSignError && <Notification final='error'>{googleSignError}</Notification>}
      <Loader start=".3s" />
      <Link to="/home">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </Link>
      <form onSubmit={handdleSignUpWithEmail}>
        <h3>Create an account</h3>
        <div className="input">
          <span className="material-symbols-outlined">mail</span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <span className="material-symbols-outlined">vpn_key</span>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Sig up" className="submit" />
      </form>
      <div className="subsection">
        <div className="hr-sect">Or</div>
        <GoogleButton onClick={handdleSignInWithGoogle} />
        <p>
          Already have an account? <Link to="/signin">Sig in here</Link>
        </p>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
