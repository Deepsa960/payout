import React from "react";
import { useState } from "react";  
import { Link , redirect } from "react-router-dom";
import axios from "axios";
import Signupk from "../images/signup.png";
import logo from "../images/dark-logo.png";

function handleSubmit(event) {
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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
export default function Login() {
  function Login() {
    const Login = () => {
      const [loggedIn, setLoggedIn] = useState(false);

      const handleLogin = async () => {
        try {
          // Make an API call to verify the login credentials
          const response = await fetch(
            "https://stekpayout.onrender.com/auth/singhtek-user/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: "your_username",
                password: "your_password",
              }),
            }
          );

          if (response.ok) {
            setLoggedIn(true);
          } else {
            // Handle login error, show error message, etc.
            console.log("Login failed");
          }
        } catch (error) {
          // Handle network error, API failure, etc.
          console.log("An error occurred:", error);
        }
      };

      if (loggedIn === true ) {
        ///this
        // this not working
        return redirect("/Admin");
      }
    };
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
                        placeholder
                        name="username"
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
                          placeholder=" "
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
                        <button
                          className="btn btn-primary btn-block w-100"
                          type="submit"
                        >
                          Sign in
                        </button>
                        {/* <Link
                        to="/Admin"
                        className="btn btn-primary btn-block w-100"
                      >
                        Sign in
                      </Link> */}
                      </div>
                    </div>
                    {/* <h6 class="text-muted mt-4 or">Or Sign in with</h6> */}
                    {/* <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login" target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i class="txt-twitter" data-feather="twitter"></i>twitter</a><a class="btn btn-light" href="https://www.facebook.com/" target="_blank"><i class="txt-fb" data-feather="facebook"></i>facebook</a></div>
                  </div> */}
                    <p className="mt-4 mb-0 text-center">
                      Don't have account?
                      {/* <a className="ms-2" href="sign-up.html">
                      Create Account
                    </a> */}
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
