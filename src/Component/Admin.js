import React from "react";
import logo from "../images/dark-logo.png";

export default function Admin() {
  return (
    <div>
      <div>
        {/* <div className="loader-wrapper">
          <div className="loader-index"> <span /></div>
          <svg>
            <defs />
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation={11} result="blur" />
              <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"> </feColorMatrix>
            </filter>
          </svg>
        </div> */}
        {/* loader ends*/}
        {/* tap on top starts*/}
        <div className="tap-top">
          <i data-feather="chevrons-up" />
        </div>
        {/* tap on tap ends*/}
        {/* page-wrapper Start*/}
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
          {/* Page Header Start*/}
          <div className="page-header">
            <div className="header-wrapper row m-0">
              <form
                className="form-inline search-full col"
                action="#"
                method="get"
              >
                <div className="form-group w-100">
                  <div className="Typeahead Typeahead--twitterUsers">
                    <div className="u-posRelative">
                      <input
                        className="demo-input Typeahead-input form-control-plaintext w-100"
                        type="text"
                        placeholder="Search Cuba .."
                        name="q"
                        title
                        autofocus
                      />
                      <div
                        className="spinner-border Typeahead-spinner"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <i className="close-search" data-feather="x" />
                    </div>
                    <div className="Typeahead-menu" />
                  </div>
                </div>
              </form>
              <div className="header-logo-wrapper col-auto p-0">
                <div className="logo-wrapper">
                  <a href="index.html">
                    <img className="img-fluid" src={logo} alt="df" />
                  </a>
                </div>
                <div className="toggle-sidebar">
                  <i
                    className="status_toggle middle sidebar-toggle"
                    data-feather="align-center"
                  />
                </div>
              </div>
              <div className="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
                <div className="notification-slider"></div>
              </div>
              <div className="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
                <ul className="nav-menus">
                  <li className="onhover-dropdown">
                    <div className="notification-box">
                      <svg>
                        <use href="../assets/svg/icon-sprite.svg#notification" />
                      </svg>
                      <span className="badge rounded-pill badge-secondary">
                        4{" "}
                      </span>
                    </div>
                    <div className="onhover-show-div notification-dropdown">
                      <h6 className="f-18 mb-0 dropdown-title">
                        Notitications{" "}
                      </h6>
                      <ul>
                        <li className="b-l-primary border-4">
                          <p>
                            Delivery processing{" "}
                            <span className="font-danger">10 min.</span>
                          </p>
                        </li>
                        <li className="b-l-success border-4">
                          <p>
                            Order Complete
                            <span className="font-success">1 hr</span>
                          </p>
                        </li>
                        <li className="b-l-secondary border-4">
                          <p>
                            Tickets Generated
                            <span className="font-secondary">3 hr</span>
                          </p>
                        </li>
                        <li className="b-l-warning border-4">
                          <p>
                            Delivery Complete
                            <span className="font-warning">6 hr</span>
                          </p>
                        </li>
                        <li>
                          <a className="f-w-700" href="#">
                            Check all
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="profile-nav onhover-dropdown pe-0 py-0">
                    <div className="media profile-media">
                      <img
                        className="b-r-10"
                        src="../assets/images/dashboard/profile.png"
                        alt=""
                      />
                      <div className="media-body">
                        <span>Emay Walter</span>
                        <p className="mb-0 font-roboto">
                          Admin <i className="middle fa fa-angle-down" />
                        </p>
                      </div>
                    </div>
                    <ul className="profile-dropdown onhover-show-div">
                      <li>
                        <a href="#">
                          <i data-feather="user" />
                          <span>Account </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="mail" />
                          <span>Inbox</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="file-text" />
                          <span>Taskboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="settings" />
                          <span>Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="log-in"> </i>
                          <span>Log in</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page Header Ends                              */}
          {/* Page Body Start*/}
          <div className="page-body-wrapper">
            {/* Page Sidebar Start*/}
            <div className="sidebar-wrapper" sidebar-layout="stroke-svg">
              <div>
                <div className="logo-wrapper">
                  <a href="index.html">
                    <img className="img-fluid for-light" src={logo} alt="" />
                    <img
                      className="img-fluid for-dark"
                      src="../assets/images/logo/logo_dark.png"
                      alt=""
                    />
                  </a>
                  <div className="back-btn">
                    <i className="fa fa-angle-left" />
                  </div>
                  <div className="toggle-sidebar">
                    <i
                      className="status_toggle middle sidebar-toggle"
                      data-feather="grid"
                    >
                      {" "}
                    </i>
                  </div>
                </div>
                <div className="logo-icon-wrapper">
                  <a href="index.html">
                    <img
                      className="img-fluid"
                      src="../assets/images/logo/logo-icon.png"
                      alt=""
                    />
                  </a>
                </div>
                <nav className="sidebar-main">
                  <div className="left-arrow" id="left-arrow">
                    <i data-feather="arrow-left" />
                  </div>
                  <div id="sidebar-menu">
                    <ul className="sidebar-links" id="simple-bar">
                      <li className="back-btn">
                        <a href="index.html">
                          <img
                            className="img-fluid"
                            src="../assets/images/logo/logo-icon.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="pin-title sidebar-main-title">
                        <div>
                          <h6>Table</h6>
                        </div>
                      </li>
                      <li className="sidebar-main-title">
                        <div>{/* <h6 className="lan-1">General</h6> */}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="right-arrow" id="right-arrow">
                    <i data-feather="arrow-right" />
                  </div>
                </nav>
              </div>
            </div>
            {/* Page Sidebar Ends*/}
            <div className="page-body">
              
              <div className="container-fluid">
                {/* <table class="table " id="ctm-table">
                  <thead>
                    <tr>
                      <tbody>      <th className="ps-0">id</th>
                      <th>customerCode</th>
                      <th>username</th>
                      <th>password</th>
                      <th>customerName</th>
                      <th>debitAccountNumber</th>
                      <th>productCode</th>
                      <th>dealerCode</th>
                      <th>beneficiaryName</th>
                      <th>creditAccountNumber</th>
                      <th>amount</th>
                      <th>createDate</th>
                      <th>remarks1</th>
                      <th>docs</th></tbody>
                
                    </tr>
                  </thead>
                </table> */}
                
              </div>
            </div>

            {/* footer start*/}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 footer-copyright text-center">
                    <p className="mb-0">
                      Copyright 2023 © Cuba theme by pixelstrap{" "}
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
