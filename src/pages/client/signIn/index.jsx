import GoogleButton from 'react-google-button';
import {Link} from 'react-router-dom';
import Loader from '../../../components/Loader';
import {userAuth} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Notification from '../../../components/Notification';
import useIsMobile from '../../../hooks/useIsMobile';
import Back from '../../../components/Background';
import {HelloContainer, Logo, MasterContainer, SignInContainer} from './style';

const SignIn = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const navigate = useNavigate();
  const {
    googleSigIn,
    user,
    SignInWithEmail,
    signInError,
    googleSignError,
  } = userAuth();
  const isMobile = useIsMobile(800);

  const handdleSignInWithGoogle = async () => {
    try {
      await googleSigIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handdleSignInWithEmail = async e => {
    e.preventDefault();
    try {
      await SignInWithEmail(email, password);
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
        <HelloContainer>
          <article>
            <h3>Wellcome back</h3>
            <p>
              Welcome back! We are glad to see you back in our here. We hope
              that your previous experiences have been good and that you find
              our platform even more intuitive and easy to use on this occasion.
              We are here to help you organize your ideas and thoughts. Have a
              great experience!
            </p>
          </article>

          <Back />
        </HelloContainer>
        <SignInContainer>
          <Loader start=".3s" />
          <Logo className="">Min notes</Logo>
          {signInError && (
            <Notification final="error">{signInError}</Notification>
          )}
          {googleSignError && <Notification>{googleSignError}</Notification>}
          <div className="signin-form">
            <span className="wellcome">
              {isMobile ? 'Wellcome back' : 'Login'}
            </span>
            <form onSubmit={handdleSignInWithEmail}>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={e => SetEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => SetPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Sig in" className="submit-button" />
            </form>
          </div>
          <div className="subsection">
            <div className="hr-sect">Or</div>
            <GoogleButton onClick={handdleSignInWithGoogle} />
            <article>
              <p>Dont have an account yet?</p>
              <Link to="/signup">Sign up here</Link>
            </article>
          </div>
          {isMobile ? <Back /> : ''}
        </SignInContainer>
      </MasterContainer>
    </>
  );
};

export default SignIn;
