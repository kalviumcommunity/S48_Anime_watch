import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    UserName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <label htmlFor="UserName">Username:</label>
          <input
            type="text"
            id="UserName"
            name="UserName"
            placeholder="Enter your username"
            value={formData.UserName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{10,}"
            title="Password must contain at least 10 characters, including at least One Number, One Uppercase letter, One Lowercase letter and one Special Character."
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            pattern={formData.password}
            title="Passwords must match"
            required
          />

          <button className="SignUpBtn" type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
