import React, { useState } from "react";
import Signupk from "../images/signup.png";
import { Link } from "react-router-dom";
import axios from "axios";

const FormData = require("form-data");
//const fs = require("fs");
export default function Signup() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [professionalEmail, setProfessionalEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [docs, setDocs] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setName(e.target.value);
        break;
      case "department":
        setDepartment(e.target.value);
        break;
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "professionalEmail":
        setProfessionalEmail(e.target.value);
        break;
      case "designation":
        setDesignation(e.target.value);
        break;
      case "mobileNo":
        setMobileNo(e.target.value);
        break;
      case "userType":
        setUserType(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "image":
        setImage(e.target.files[0]);
        break;
      case "docs":
        setDocs(e.target.files[0]);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", name);
    formData.append("department", department);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("professionalEmail", professionalEmail);
    formData.append("designation", designation);
    formData.append("mobileNo", mobileNo);
    formData.append("userType", userType);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("docs", docs);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://192.168.1.17:8000/singhtek-users",
      headers: {
        "Content-Type": 'multipart/form-data',
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-5 col-md-5">
            <img
              className="bg-img-cover bg-center img-fluid"
              src={Signupk}
              alt="looginpage"
            />
          </div>
          
          <div className="col-xl-7 col-md-7 p-0">
            <div className="login-card login-dark">
              <div>
                <div>
                  <a className="logo text-start" href="index.html">
                    <img
                      className="img-fluid for-light"
                      src="../assets/images/logo/logo.png"
                      alt="looginpage"
                    />
                  </a>
                </div>
                <div className="login-main">
                  <form
                    className="theme-form"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <h4>Create your account</h4>
                    <p>Enter your personal details to create account</p>
                    <div className="form-group">
                      <label className="col-form-label pt-0">Your Name</label>
                      <div className="row g-2">
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="First name"
                            name="firstName"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            required
                            placeholder="Last name"
                            name="lastName"
                            onChange={handleChange}
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
                        name="professionalEmail"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">user Name</label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder=" user name"
                        name="username"
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Docs</label>
                      <input
                        className="form-control"
                        type="file"
                        required
                        placeholder=" Docs"
                        name="docs"
                        onChange={handleChange}
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
                          onChange={handleChange}
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
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="submit"
                      >
                        Create Account
                      </button>
                    </div>

                    {/* <h6 class="text-muted mt-4 or">Or signup with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login" target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i class="txt-twitter" data-feather="twitter"></i>twitter</a><a class="btn btn-light" href="https://www.facebook.com/" target="_blank"><i class="txt-fb" data-feather="facebook"></i>facebook</a></div>
                  </div> */}
                    <p className="mt-4 mb-0 text-center">
                      Already have an account?
                      <Link to="/Login" className="btn-showcase ms-2 ctm-btn">
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
