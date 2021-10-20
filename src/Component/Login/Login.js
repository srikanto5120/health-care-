import React from "react";

import "./Login.css";

import useAuth from "../../Hooks/useAuth";

import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const { allContext } = useAuth();

  const history = useHistory();

  const location = useLocation();
  const redict = location?.state?.from;

  const {
    signInUsingGoogle,
    getEmail,
    getPassword,
    error,
    setError,
    setUser,
    signinWithEmail,
  } = allContext;
  return (
    <div className=" login   my-5">
      <h4 className="  m-2">Please Login</h4>
      <form className="mt-5  ">
        <input
          onBlur={getEmail}
          type="email"
          placeholder="Enter Your Email"
          className="form-control"
          id="inputEmail3"
          required
        />
        <br />

        <input
          placeholder="Enter Your password"
          onBlur={getPassword}
          type="password"
          required
          className="form-control"
          id="inputPassword3"
        />

        <div className="btn-align">
          <small className="text-danger">{error}</small>
          <button
            onClick={signinWithEmail}
            type="submit"
            className="btn btn-primary  w-75 "
          >
            Log in
          </button>
          <br />
          <br />
          <Link to="/signup">
            <button type="submit" className="btn btn-primary  w-75 ">
              Create your account
            </button>
          </Link>
          .............or...............
          <button
            onClick={() => {
              signInUsingGoogle()
                .then((result) => {
                  const user = result.user;
                  setUser(user);
                  history.push(redict);
                })
                .catch((error) => {
                  setError(error.message);
                });
            }}
            type="submit"
            className="btn btn-primary  w-75 "
          >
            Google
          </button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};
export default Login;
