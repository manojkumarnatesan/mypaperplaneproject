import React, { useState } from "react";
import LoginPageImage from "../../assets/images/loginpage/loginPageImage.svg";
import LoginPageLogo from "../../assets/images/loginpage/login-page-logo.png";
import "./loginPage.css";
import SignUp from "../signUpPage/signUp";

function LoginPage() {
  const initialState = {
    email: "",
    password: "",
  };

  const [loginDetails, setLoginDetails] = useState(initialState);

  function getLoginDetails(event) {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginDetails);
    setLoginDetails(initialState);
  }

  return (
    <div className="bs-tertiary-bg-rgb">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6 p-2 p-md-3 bg-light rounded-5">
            <div className="col-8 mb-2">
              <img src={LoginPageLogo} className="img-fluid" alt=".." />
            </div>
            <img src={LoginPageImage} className="img-fluid" alt=".." />
          </div>
          <div className="col-12 col-md-6 my-auto">
            <div className="login-form-container" alt="Logos">
              <h2 class="sign">Sign In</h2>
              <h6 className="head">Login with your Phone number or Email</h6>
              <form className="login-form " onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input
                  placeholder="Email or phone number"
                  type="text"
                  name="email"
                  id="email"
                  className="email-input"
                  onChange={getLoginDetails}
                  value={loginDetails.email}
                  required
                />
                <label htmlFor="password"></label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="password-input"
                  id="password"
                  onChange={getLoginDetails}
                  value={loginDetails.password}
                  required
                />
                <button type="submit" className="login-button">
                  Sign In
                </button>
                <button
                 className="btn btn-outline-primary" to="/signUp">
                  signupNewAccount
                
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
