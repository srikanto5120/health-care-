import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className=" login   my-5">
      <h5 className="  m-2"> Create Account</h5>
      <form className="mt-5  ">
        <input
          type="email"
          placeholder="Enter Your First Name"
          className="form-control"
          id="inputEmail3"
          required
        />
        <br />

        <input
          type="email"
          placeholder="Enter Your  Last Name"
          className="form-control"
          id="inputEmail3"
          required
        />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="form-control"
          id="inputEmail3"
          required
        />
        <br />

        <input
          placeholder="Enter Your password"
          type="password"
          required
          className="form-control"
          id="inputPassword3"
        />

        <div className="btn-align">
          <button type="submit" className="btn btn-primary  w-75 ">
            Sign in
          </button>
          <br />
          <br />
          <Link to="/login">
            <button type="submit" className="btn btn-primary  w-75 ">
              Create your account
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

export default Register;
