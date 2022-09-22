import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import Notification from "../components/Notification";

const SignUpContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  gap: 0.5rem;

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: bold;
  }

  h3 {
    color: #5b5b5b;
  }

  .subsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .submit {
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    border: solid 0.5px whitesmoke;
    color: whitesmoke;
  }

  input[type="submit"]:active {
    transform: scale(0.95);
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #fff2;
    margin: 8px 0px;
  }

  .hr-sect:before,
  .hr-sect:after {
    content: "";
    flex-grow: 1;
    background: #fff2;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
`;

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
      {createUserError && <Notification>{createUserError}</Notification>}
      {googleSignError && <Notification>{googleSignError}</Notification>}
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
