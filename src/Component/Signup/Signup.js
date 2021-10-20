import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { allContext } = useAuth();
  const {
    getEmail,
    getName,
    getPassword,

    error,
    signInUsingGoogle,
    signinWithEmail,
  } = allContext;
  return (
    <div className=" login   my-5">
      <h4 className="  m-2">Please Login</h4>
      <form className="mt-5  ">
        <input
          onBlur={getName}
          type="text"
          placeholder="Enter Your Name"
          className="form-control"
          id="inputName"
          required
        />
        <br />
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
        <br />
        {/* <input
          placeholder="Enter Your photurl"
          onBlur={getPhotoURL}
          type="text"
          required
          className="form-control"
          id="inputPhotourl"
        />
        <br /> */}
        <div className="btn-align">
          <small className="text-danger">{error}</small>
          <button
            onClick={signinWithEmail}
            type="submit"
            className="btn btn-primary  w-75 "
          >
            Signup
          </button>
          <br />
          <br />
          <Link to="/login">
            <button type="submit" className="btn btn-primary  w-75 ">
              Log in
            </button>
          </Link>
          .............or...............
          <button
            onClick={signInUsingGoogle}
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

export default Signup;
