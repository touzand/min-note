import GoogleButton from "react-google-button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SignInContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  .subsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: bold;
  }

  .signin {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .submit {
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    border: solid 0.5px whitesmoke;
    color: whitesmoke;
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

const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  const { googleSigIn, user, SignInWithEmail } = userAuth();

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
      <Loader />
      <Link to="/home">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </Link>
      <div className="signin">
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
          <input type="submit" value="Sig in" className="submit" />
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
