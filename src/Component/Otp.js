import React from "react";
import { Link } from "react-router-dom";

export default function Otp() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* <div class="col-xl-5"><img class="bg-img-cover bg-center" src="../assets/images/login/3.jpg"
                    alt="looginpage"></div> */}
          <div className="col-xl-12 p-0">
            <div className="login-card login-dark">
              <div>
                <div className="card-body">
                  <h4 className="card-title text-center">OTP Verificattion</h4>
                  <div className="card-text text-center mt-5">
                    <form action className="otp-form">
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      {/* Store OTP Value */}
                      <input
                        className="otp-value"
                        type="hidden"
                        name="opt-value"
                      />
                      <div className="d-block mt-4">
                        {/* <button className="btn btn-primary" type="submit">Verify</button> */}
                        <Link to="/Login" className="btn-showcase ms-2 ctm-btn">
                        Verify                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
