import React from "react";
import { useState } from "react";
import "./Login.css";

import useAuth from "../../Hooks/useAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRagistation = (e) => {
    e.preventDefault();

    const auth = getAuth();
    if (password < 6) {
      setError("Password must be  at least 6 chracter");
      return;
    }
    // if (!/(?=*[0-9])/.test(password)) {
    //   setError("Assert a string has at least one number;");
    //   return;

    // if (!/(?=.*[!@#$%^&*])/.test(password)) {
    //   setError("Assert a string has at least one special character");
    //   return;
    // }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setError("");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className=" login   my-5">
      <h4 className="  m-2">Please Login</h4>
      <form onSubmit={handleRagistation} className="mt-5  ">
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="Enter Your Email"
          className="form-control"
          id="inputEmail3"
          required
        />
        <br />

        <input
          placeholder="Enter Your password"
          onBlur={handlePassword}
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
          <Link to="/register">
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
export default Login;
