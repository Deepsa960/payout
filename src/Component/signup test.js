import React from "react";
import Signupk from "../images/signup.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post("http://192.168.1.6:8000/singhtek-users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-5">
            <img
              className="bg-img-cover bg-center img-fluid"
              src={Signupk}
              alt="looginpage"
            />
          </div>
          <div className="col-xl-7 p-0">
            <div className="login-card login-dark">
              <div>
                <div>
                  <a className="logo text-start" href="index.html">
                    <img
                      className="img-fluid for-light"
                      src="../assets/images/logo/logo.png"
                      alt="looginpage"
                    />
                    <img
                      className="img-fluid for-dark"
                      src="../assets/images/logo/logo_dark.png"
                      alt="looginpage"
                    />
                  </a>
                </div>
                <div className="login-main">
                  <form
                    className="theme-form"
                    encType="multipart/form-data"
                    method="POST"
                    action="#"
                    onSubmit={handleSubmit}
                  >
                    <h4>Create your account</h4>
                    <p>Enter your personal details to create account</p>
                    <div className="form-group">
                      <label className="col-form-label pt-0">Your Name</label>
                      <div className="row g-2">
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="First name"
                            name="firstName"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="Last name"
                            name="lastName"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Email Address</label>
                      <input
                        className="form-control"
                        type="email"
                        required
                        placeholder=" "
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">user Name</label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder=" user name"
                        name="
                        username"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Department</label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder="Department "
                        name="department"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">
                        Professional Email{" "}
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        required
                        placeholder=" Professional Email"
                        name="professionalEmail"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Designation </label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder=" Designation"
                        name="designation"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Mobile </label>
                      <input
                        className="form-control"
                        type="tel"
                        required
                        placeholder=" Mobile"
                        name="mobileNo"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">User Type </label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder=" User Type"
                        name="userType"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Image</label>
                      <input
                        className="form-control"
                        type="file"
                        required
                        placeholder="Image"
                        name="image"
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Docs</label>
                      <input
                        className="form-control"
                        type="file"
                        required
                        placeholder=" Docs"
                        multiple="multiple"
                        name="docs[]"
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
                          <span className="show" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="checkbox p-0">
                        <input id="checkbox1" type="checkbox" />
                        <label className="text-muted" htmlFor="checkbox1">
                          Agree with
                          <a className="ms-2" href="#">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-block w-100"
                      type="submit"
                    >
                      Create Account
                    </button>
                    {/* <h6 class="text-muted mt-4 or">Or signup with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login" target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i class="txt-twitter" data-feather="twitter"></i>twitter</a><a class="btn btn-light" href="https://www.facebook.com/" target="_blank"><i class="txt-fb" data-feather="facebook"></i>facebook</a></div>
                  </div> */}
                    <p className="mt-4 mb-0 text-center">
                      Already have an account?
                      <Link to="/Login" className="btn-showcase ms-2">
                        Sign in
                      </Link>
                      {/* <a className="ms-2" href="login.html"> */}
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
