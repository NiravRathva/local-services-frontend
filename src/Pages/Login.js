import React from "react";

const Login = () => {
  return (
    <div className="container bg-inherit vh-100 d-flex justify-content-center align-items-center">
    <div className="border border-dark p-5">
      <h3>Login to Your Account</h3>
      <input
        type="text"
        placeholder="Enter your email"
        id="username"
        className="form-control mb-3"
      />
      <input
        type="password"
        placeholder="Enter your password"
        id="password"
        className="form-control mb-3"
      />
      <button className="btn btn-primary w-100">Login</button>
      {/* {error && <span>{error.message}</span>} */}
    </div>
  </div>
  
  );
};

export default Login;
