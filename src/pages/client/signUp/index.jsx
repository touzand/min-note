import Loader from '../../../components/Loader';
import {Link} from 'react-router-dom';
import {userAuth} from '../../../contexts/AuthContext';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {GoogleButton} from 'react-google-button';
import Notification from '../../../components/Notification';
import {Logo, MasterContainer, SignUpContainer} from './style';
import useIsMobile from '../../../hooks/useIsMobile';
import Background from '../../../components/Back';
import {
  HelloContainerDesktop,
  SignForm,
  SignFormSubsection,
} from '../../../styled-components';

const SignUp = () => {
  const {
    user,
    CreateUserWithEmail,
    googleSigIn,
    createUserError,
    googleSignError,
  } = userAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile(800);

  const handdleSignUpWithEmail = async e => {
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
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <MasterContainer>
        <HelloContainerDesktop>
          <article>
            <h3>Wellcome</h3>
            <p>
              Hello! We're glad to have you here. We know there are many
              applications available, so we appreciate you choosing ours. We
              hope you enjoy the functionality and simplicity of our platform.
              Please enter your credentials to start exploring.
              <br />
              After doing so, you will be redirected to the application within
              your account, now available and configured for your immediate use.
            </p>
          </article>

          <Background />
        </HelloContainerDesktop>
        <SignUpContainer>
          <Loader start=".3s" />
          <Logo>Min note</Logo>
          {createUserError && (
            <Notification final="error">{createUserError}</Notification>
          )}
          {googleSignError && (
            <Notification final="error">{googleSignError}</Notification>
          )}
          <SignForm>
            <form onSubmit={handdleSignUpWithEmail}>
              <span className="wellcome">Create an account</span>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Sig up" className="submit-button" />
            </form>
          </SignForm>
          <SignFormSubsection>
            <div className="hr-sect">Or</div>
            <GoogleButton onClick={handdleSignInWithGoogle} />
            <article>
              <p>Already have an account?</p>
              <Link to="/signin">Sig in here</Link>
            </article>
          </SignFormSubsection>
          {isMobile && <Background />}
        </SignUpContainer>
      </MasterContainer>
    </>
  );
};

export default SignUp;
