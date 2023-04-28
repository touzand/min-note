import { Navigate } from "react-router-dom";
import { userAuth } from "../contexts/AuthContext.jsx";

const Protect = ({ children }) => {
  const { user } = userAuth();

  if (!user) return <Navigate to="/signin"/>;
  return children;
};

export default Protect;
