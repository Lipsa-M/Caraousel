import React from "react";
import google from "../images/google.png";
import "./login_modal.css";


export default function login_modal() {
  return (
    <body>
      <div class="login-container">
        <div class="close">
          <span
            class="close-span"
            onclick="this.parentNode.parentNode.remove(); return false;"
          >
            &times;
          </span>
        </div>
        <div class="container">
          <h1 class="red-text">Welcome!!</h1>
          <h4>Login to continue</h4> <br />
          <br />
          <form>
            <div class="user-details">
              <div class="input-box">
                <div class="details">Email</div>
                <input type="email" placeholder="Your email" required />
                <br />
                <br />
              </div>
              <div class="input-box">
                <div class="details">Password</div>
                <input type="password" placeholder="Your password" required />
                <br />
              </div>
            </div>
            
            {/* <input type="password" placeholder="Password" required /> */}
            
            <br />
            <div class="remember">
              <input type="checkbox" id="remember" />
              <span for="remember">Remember me</span>
              <span class="forgot">
                <a href="">Forgot Password?</a>
              </span>
            </div>
            <br />
            <br />
            <button class="red-button" type="submit">
              Login
            </button>
          </form>
          <br />
          <div class="log">
            Don't have an Account? <a href="">Signup</a>
          </div>
          <br />
          <p class="continue-text">
            <span>or continue with</span>
          </p>
          <div class="social-icons">
            <div class="google-icon">
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
