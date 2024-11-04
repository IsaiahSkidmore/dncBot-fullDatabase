import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import React from "react";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    try {
      const result = await authService.login(email, password);

      if (result) {
        navigate(`/agent`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      
    }
  };

  return (
    <div>
      
          <p className="authP">
            Login to your account to acces the phone dialer.
          </p>

          <div className="loginContainer">
            <div className="login">
            <form onSubmit={handleLogin}>
            <h2>
                Login
              </h2>
            <div className="container">
    
            <input
              type="email"
              className="loginInput"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            
            <div className="container">
            <input
              type="password"
              className="loginInput"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>

            <p style={{marginTop: '10px'}}>
              Don't have an account?{" "}
              <Link to="/register" style={{textDecoration: 'none'}}>
                <span>Register</span>
              </Link> 
            </p>

            <div className="container">
            <button id="loginButton">
             <span>Login</span>
            </button>
            </div>
            

          </form>
            </div>
          </div>

      </div>
  );
};

export default Login;
