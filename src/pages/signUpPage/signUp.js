import React from "react";
import LoginPage from "../loginPage/loginPage";

function SignUp() {
  return (
    <div>
      <h2>Create Account</h2>
      <label htmlFor="phone">Mobile Phone Number:</label>
      <input
        type="text"
        id="phone"
        placeholder="Enter your mobile phone number"
      />
      <button>Send OTP</button>
    </div>
  );
}

export default SignUp;
