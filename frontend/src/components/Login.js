import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";
import "bootstrap-icons/font/bootstrap-icons.css";

function Login(){

   const [username,setusername]=useState("");
   const [password,setpassword]=useState("");
   const [showpassword,setshowpassword]=useState(false);
   const navigate=useNavigate();
   const handlelogin = (e) =>{
    e.preventDefault();

    login(username,password).then((response) =>{
        localStorage.setItem("token",response.data);
        alert("Login Success");
        navigate("/students");
    })
    .catch((error)=>{console.log(error);
        alert("Invalid Credentials");
    });
   };

    return(
       <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      background: "linear-gradient(to right, #4facfe, #00f2fe)"
    }}
  >
    <div
      className="card shadow-lg p-4"
      style={{ width: "400px", borderRadius: "15px" }}
    >
      <div className="text-center mb-4">
        <h2 className="fw-bold">Student Management System</h2>
        <p className="text-muted">Login to continue</p>
      </div>

      <form onSubmit={handlelogin}>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>

        <div className="mb-3">
  <label className="form-label">Password</label>

  <div className="input-group">
    <input
      type={showpassword ? "text" : "password"}
      className="form-control"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
    />

    <span
      className="input-group-text"
      style={{ cursor: "pointer" }}
      onClick={() => setshowpassword(!showpassword)}
    >
      <i
        className={
          showpassword
            ? "bi bi-eye-slash-fill"
            : "bi bi-eye-fill"
        }
      ></i>
    </span>
  </div>
</div>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Login
        </button>

      </form>

      <div className="text-center mt-3">
        <small className="text-muted">
          Spring Boot + React + JWT
        </small>
      </div>
    </div>
  </div>
    );
}
export default Login;