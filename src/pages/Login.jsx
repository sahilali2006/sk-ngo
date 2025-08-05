import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Logged in (Simulated)");
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    alert("Account Created (Simulated)");
  };

  return (
    <div className="login-main-bg">
      <div className="login-card">
        {isLogin ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2 className="form-title">Log In</h2>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required />
            <button type="submit" className="btn-primary">
              Log In
            </button>
            <p className="switch-text">
              Don't have an account?{" "}
              <span className="switch-link" onClick={toggleForm}>
                Create Account
              </span>
            </p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleCreateSubmit}>
            <h2 className="form-title">Create Account</h2>
            <label>Full Name</label>
            <input type="text" placeholder="Your Name" required />
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
            <label>Password</label>
            <input type="password" placeholder="Create Password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="switch-text">
              Already have an account?{" "}
              <span className="switch-link" onClick={toggleForm}>
                Log In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
