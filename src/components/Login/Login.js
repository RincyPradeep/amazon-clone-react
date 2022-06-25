import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'

import AuthContext from '../../context/AuthContext';

import './Login.css'


const Login = () => {

    let {loginUser} = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')


    return (
        <section id="login">
            <img src="/images/amazon_logo_black.png" alt="logo" />
            <div className="login-container">
            <form onSubmit={loginUser}>
                <p className="login-head">Sign-In</p>
                <div className="input">
                    <label><b>Username</b></label>
                    <input type="text" value={username} name="username"
                            onChange={(e)=>setUsername(e.target.value)} autoComplete="username" required/>
                </div>    
                <div className="input">
                    <label><b>Password</b></label>
                    <input type="password" value={password} name="password" 
                            onChange={(e)=>setPassword(e.target.value)} autoComplete="current-password" required/>
                </div>            
                <button type="submit">Sign In</button>
                <p className="login-info">By continuing, you agree to Amazon's <span className="login-link">Conditions of Use</span> and <span className="login-link">Privacy Notice.</span></p>
                <p className="login-help">Need help?</p>
                </form>
            </div>
            <div className="login-new">
                <div className="horizontal-line"></div>
                <p>New to Amazon?</p>   
                <Link to="/signup" className="create-account-btn">Create your Amazon account</Link>
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
    )
}

export default Login
