import {Navigate} from 'react-router-dom';
import {userAuth} from '../contexts/AuthContext.jsx';

const Protect = ({children}) => {
  const {user} = userAuth();

  if (!user) return <Navigate to="/signup" />;
  return children;

  //if (!user) {
    //<Navigate to="/signup" />;
  //} else {
    //return children;
  //}
};

export default Protect;
