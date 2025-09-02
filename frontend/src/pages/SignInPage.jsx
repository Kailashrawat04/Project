import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import "./AuthPages.css";
import "./SignInPage.css";

const SignInPage = () => {
    const Navigate = useNavigate();
    const { login } = useAuth();
    const onSignUpButtonClick = () => {
        Navigate("/")
    }
    const [FormData, setFormData] = useState({})
    const onEmailChange = (e) => {
        setFormData({ ...FormData, email: e.target.value })
    }
    const onPasswordChange = (e) => {
        setFormData({ ...FormData, password: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("https://project-backend-n78k.onrender.com/SignIn/ValidateUser", { FormData })
            .then((res) => {
                if (res.data.out) {
                    // Store user data and token in auth context
                    login(res.data.user, res.data.token);
                    Navigate("/Home")
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Login failed. Please check your credentials.")
            })
    }
   return (
  <div className="signin-wrapper">
    <div className="signin-card">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={onEmailChange}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={onPasswordChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      <p>
        New Customer?{" "}
        <button onClick={onSignUpButtonClick}>Sign Up</button>
      </p>

      <div className="divider">or</div>

      <button className="google-btn" onClick={() => { console.log("Google Sign-In clicked"); }}>
        Sign In with Google
      </button>
    </div>
  </div>
);

}

export default SignInPage
