import React from "react";
import "./login.css";
const loginwithgoogle = ()=>{
  window.open("http://localhost:5000/auth/google/callback","_self")
}
const Login = ()=>{
    return(
      <div className="login-page">
        <h1 style={{textAlign:"center"}}>Login</h1>
        <div className="form">
            <form  className="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" name="" id="" placeholder="Password" />
                <button>Login</button>
                <p className="message">Not Registered? <a href="#">Create an account</a></p>
            </form>
            <button className="login-with-google-btn" onClick={loginwithgoogle}>
                Sing In With Google
            </button>
        </div>
      </div>
    )
}
export default Login;