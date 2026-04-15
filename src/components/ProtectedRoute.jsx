import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  console.log("ProtectedRoute - isAuth:", isAuth);

  if (!isAuth) {
    console.log("Not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Authenticated, showing protected content");
  return children;
};

export default ProtectedRoute;
