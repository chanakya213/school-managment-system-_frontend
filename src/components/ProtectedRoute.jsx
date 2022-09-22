import React from "react";
import { Route, Navigate } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Navigate to={{ pathname: "/" }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
