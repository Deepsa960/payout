import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Forgot.css";
export default function ForgotPassword() {
  // useEffect(() => {
  //   function validateName(x) {
  //     var re = /[A-Za-z@0-9.]/;
  //     if (re.test(document.getElementById(x).value)) {
  //       return true;
  //     } else {
  //       document.getElementById(x).style.background = "#fff";
  //       document.getElementById(x + "Error").style.display = "block";
  //       return false;
  //     }
  //   }
  // });

  return (
    <section className="bgcover">
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 p-0">
              <div className="login-card-one   login-dark">
                <div>
                  <title>Forgot Password Form</title>
                  <h1>Forgot your password?</h1>
                  <h3>Enter your email address to reset your password</h3>
                  <form action="" method="post" id="ForgotForm">
                    <label htmlFor="mail">Email</label>
                    <br />
                    <input
                      type="email"
                      id="name"
                      name="name"
                      placeholder="Enter your email address"
                      required
                      onblur="validateName(name)"
                    />
                    <span id="nameError" style={{ display: "none" }}>
                      **There was an error with your email**
                    </span>
                    {/* <button type="submit" className>
                    Submit
                  </button> */}
                    <Link to="/Otp" className="btn-showcase ms-2 ctm-btn">
                      Sign in
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
