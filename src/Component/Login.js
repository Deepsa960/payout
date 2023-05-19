import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Signupk from "../images/signup.png";
import logo from "../images/dark-logo.png";
import Alert from "@mui/material/Alert";
import { LoadingButton } from "@mui/lab";
export default function Login() {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLodingIn] = useState(false);
  function handleSubmit(event) {
    setLodingIn(true);
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    axios
      .post(
        "https://stekpayout.onrender.com/auth/singhtek-user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          setLodingIn(false);
          navigate("/Admin");
        }
      })
      .catch((err) => {
        setLodingIn(false);
        setLoggedIn(true);
      });
=======
  function Login() {
   
>>>>>>> c610c96e (admin dasboard update)
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5">
            <img
              className="bg-img-cover bg-center img-fluid"
              src={Signupk}
              alt="looginpage"
            />
          </div>{" "}
          <div className="col-xl-7 p-0">
            <div className="login-card login-dark">
              <div>
                <div>
                  <a className="logo text-start" href="index.html">
                    <img
                      className="img-fluid for-light"
                      src={logo}
                      alt="loogindfdpage"
                      width={150}
                    />
                  </a>
                </div>
                <div className="login-main">
                  <form className="theme-form" onSubmit={handleSubmit}>
                    <h4>Sign in to account</h4>
                    <p>Enter your email &amp; password to login</p>
                    <div className="form-group">
                      <label className="col-form-label">Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        name="username"
                        onChange={() => setLoggedIn(false)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <div className="form-input position-relative">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          required
                          onChange={() => setLoggedIn(false)}
                        />
                        <div className="show-hide">
                          <span className="show"> </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="checkbox p-0">
                        <input id="checkbox1" type="checkbox" />
                        <label className="text-muted" htmlFor="checkbox1">
                          Remember password
                        </label>
                      </div>
                      {/* <a className="link" href="forget-password.html">
                    </a> */}
                      <Link to="/ForgotPassword" className="link ctm-btn">
                        Forgot password?
                      </Link>
                      <div className="text-end mt-3">
                        <LoadingButton
                          className="btn btn-primary btn-block w-100"
                          type="submit"
                          variant="contained"
                          color="primary"
                          loading={loading}
                        >
                          Sign In
                        </LoadingButton>
                      </div>
                      <br></br>
                      {loggedIn === true ? (
                        <Alert
                          severity="error"
                          closeText="close
                        "
                        >
                          This is an error alert — check it out!
                        </Alert>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="mt-4 mb-0 text-center">
                      Don't have account?
                      <Link to="/Signup" className="ms-2 ctm-btn">
                        Create Account
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
