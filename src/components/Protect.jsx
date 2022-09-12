import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext.jsx";

const Protect = ({ children }) => {
  const { user } = userAuth();

  if (!user) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default Protect;
