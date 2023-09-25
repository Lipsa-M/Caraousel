import React from "react";
import "./style.css";

import google from "../images/google.png"

function react() {
  
const passwordEye = () => {
    const password = document.getElementById('id_password');
          if (password) {
            password.type = password.type === 'password' ? 'text' : 'password'
          }
}
  return (
    <body>
      <div class="close">
        <span
          class="close-span"
          onclick="this.parentNode.parentNode.remove(); return false;"
        >
          &times;
        </span>
      </div>
      <div class="container">
        <div class="content-item">
          <div class="title">Register your Account</div>
          <label for="text" class="label-class">
            Fill the details below to register your account
          </label>
          <div class="content">
            <form action="#" >
            <div class="user-details">
              <div class="name">
                <div class="input-box new-input">
                  <span class="details">First Name</span>
                  <input
                    type="text"
                    maxlength="30"
                    placeholder="Your first name(max 30 char)"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Last name</span>
                  <input
                    type="text"
                    maxlength="30"
                    placeholder="Your last name(max 30 char)"
                    required
                  />
                </div>
              </div>

              <div class="input-box">
                <span class="details">Email</span>
                <input type="email" placeholder="Your email" required />
              </div>
              <div class="phone-number">
                <div class="text-cont">
                  <span class="details">Phone Number</span>
                </div>
                <div class="p-number">
                  <select name="countryCode" id="">
                    <option data-country-code="GB" value="91" selected>
                      +91
                    </option>
                    <option data-country-code="IN" value="1">
                      +92
                    </option>

                    <optgroup label="Other countries">
                      <option data-country-code="CV" value="1">
                        +1
                      </option>
                      <option data-country-code="CH" value="41">
                        +41
                      </option>
                    </optgroup>
                  </select>
                  <div class="input-box">
                    <input
                      type="tel"
                      maxlength="10"
                      placeholder="Enter your number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="input-box">
                <span class="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required=""
                  id="id_password"
                />
                <i class="far fa-eye" id="togglePassword" onClick={passwordEye}></i>
              </div>``
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div class="terms-details">
              <span class="terms-title">
                By signing in, you agree to our{" "}
                <a href="">Terms & Conditions</a> and{" "}
                <a href="">Privacy Policy.</a>
              </span>
            </div>
            </form>
          </div>
         
          <div class="button">
            <input type="submit" value="Register" />
          </div>

          

          <div class="log">
            Already have an Account? <a href="">Log In</a>
          </div>
          <p class="continue-text">
            <span>or continue with</span>
          </p>
          <div class="social-icons">
            <div class="google-icon">
              <img src= {google} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </body>
  );
}

export default react;
