import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://black-mechanic-yknxe.ineuron.app:5000/api/v1/auth/signup",
        { name: name, mobile: mobileNo, email: email, password: password }
      );
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post(
        "https://localservice.onrender.com/api/v1/auth/signup",
        {
          name: name,
          mobileNo: mobileNo,
          email: email,
          password: password,
        }
      );
      navigate("/login");
      // Handle the response from the server
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <div
      className="bg-light d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <form className="container p-5 border border-dark rounded">
        <h3 className="mb-4">Create Account</h3>
        <div className="mb-3">
          {/* Input fields with onChange handlers */}
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            placeholder="Mobile Number"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {/* Submit button */}{" "}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
