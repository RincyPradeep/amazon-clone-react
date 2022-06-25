import React, {useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContext from '../../context/AuthContext';

import "./SignUp.css";


const SignUp = () => {

  let {createUser,errMessage,name,mobile,email,password,setName,setMobile,setEmail,setPassword} = useContext(AuthContext)

  useEffect(()=>{
    setName("")
    setMobile("")
  },[])

  return (
    <section id="signup">
      <img src="/images/amazon_logo_black.png" alt="logo" className="login-logo" />
      <div className="signup-container">
        <form onSubmit={createUser}>
          <h2 className="signup-head">Create Account</h2>
          <div className="input">
            <label><b>Your name</b></label>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="First and last name" />
            <p className="error">{errMessage && errMessage["name"]}</p>
          </div>
          <div className="input">
            <label><b>Mobile number(With +91)</b></label>
            <input type="text" value={mobile} name="mobile" onChange={(e) => setMobile(e.target.value)} placeholder="Mobile number"/>
            <p className="error">{errMessage && errMessage["mobile"]}</p>
          </div>
          <div className="input">
            <label><b>Email (Optional)</b></label>
            <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            <p className="error">{errMessage && errMessage["email"]}</p>
          </div>
          <div className="input">
            <label><b>Password</b></label>
            <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Atleast 6 characters"  autoComplete="new-password" />
            <p className="error">{errMessage && errMessage["password"]}</p>
          </div>

          <p className="signup-info">
            Passwords must be at least 6 characters.
          </p>
          
          <p className="signup-info">
            We will send you a text to verify your phone. Message and Data rates
            may apply.
          </p>
          <button type="submit" className="signup-btn">Continue</button>

          <div className="signup-info">
            <div className="horizontal-line"></div>
            <p className="signup-info">
              Already have an account?
              <Link to="/login">{" "}Sign in</Link>
            </p>
            <p className="signup-info">
              Buying for work?{" "}
              <Link to="#">Create a free business account</Link>
            </p>
          </div>
        </form>
      </div>

      <div className="footer">
        <div className="footer-line"></div>
        <ul>
            <li><Link to="#">Conditions of Use</Link></li>
            <li><Link to="#">Privacy Notice</Link></li>
            <li><Link to="#">Help</Link></li>
        </ul>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </section>
  );
};

export default SignUp;
