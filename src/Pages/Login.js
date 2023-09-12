import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../Store/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart())
      const res = await axios.post(
        "https://localservice.onrender.com/api/v1/auth/signin",
        { email, password }
      );
      dispatch(loginSuccess(res.data.data.user))
      navigate(`/`);
    } catch (error) {
      console.log(error);
      dispatch(loginFailure())
    }
  };
  return (
    <div className="container bg-inherit vh-100 d-flex justify-content-center align-items-center">
      <div className="border border-dark p-5">
        <h3>Login to Your Account</h3>
        <input
          type="text"
          placeholder="Enter your email"
          id="username"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogIn}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
