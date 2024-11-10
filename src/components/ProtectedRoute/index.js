import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ element: Component }) => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  try {
    const decodedToken = jwtDecode(accessToken);
    const time = Date.now() / 1000;
    if (decodedToken.exp < time) {
      sessionStorage.removeItem("accessToken");
      return <Navigate to="/" />;
    }
  } catch (error) {
    console.log("Invalid token or decoding error ", error);
    sessionStorage.removeItem("accessToken");
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
