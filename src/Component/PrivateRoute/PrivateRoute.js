import React from "react";

import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { allContext } = useAuth();
  const { user } = allContext;

  return (
    <div>
      (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
      );
    </div>
  );
};

export default PrivateRoute;
