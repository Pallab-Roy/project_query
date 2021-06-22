import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink, useHistory } from 'react-router-dom';
import Axios from "axios";
import logo from "../static/logo.png";

function Register() {
  const history = useHistory();

  const [user, setuser] = useState({
    email: "", password: ""
  });

  // Input field data store in state
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  }

  // post the data to backend
  const postData = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    Axios.post('/register', {
      email: email,
      password: password,
    }).then((res) => {
      const data = res.data;
      if (!data) {
        window.alert("Server not responding!");
      } else {
        window.alert("Registration Sucessfull.");
        history.push("/login");
      }
    }).catch((err) => {
      // eslint-disable-next-line
      if (err == "Error: Request failed with status code 420") {
        window.alert("Please fill the form properly!");
        history.push("/signup");
        // eslint-disable-next-line
      } else if (err == "Error: Request failed with status code 422") {
        window.alert("Email already exist!");
        history.push("/login");
      } else {
        console.log(err)
        history.push("/signup");
      }
    })
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src={logo}
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
          <p style={{ color: "royalblue", fontSize: "25px" }}>
            By
          </p>
          <h3>Pallab Roy</h3>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p>Continue With Google</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Signup</h4>
            </div>
            <form method="POST" className="login__inputFields">
              <div className="login__inputField">
                <input type="email" name="email" id="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input type="password" name="password" id="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="login__forgButt">
              <span>Already have account?<NavLink to="/login" className="loginButton">Login</NavLink></span>
            </div>
            <button onClick={postData}>Register</button>
          </div>
        </div>
        <div className="login__lang">
          <p>हिन्दी</p>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Fake Inc. 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
