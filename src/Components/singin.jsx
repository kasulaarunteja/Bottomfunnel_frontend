import React from 'react';
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useState, useEffect} from "react";
import { signupHandler } from '../Redux/action';


const Singin = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading,auth} = useSelector((store) => store)
  useEffect(() => {
    if(auth === true){
      navigate("/login")
    }
  },[auth])

  const baseurl = `http://localhost:8080`

  const handleSignin = () => {
    let url = `${baseurl}/register`;
    let data = {
      name :name,
      email:email,
      password: pass
    }
    dispatch(signupHandler([url, data]))
  }


   
    return (
        <div className="Auth-form-container">
        <form className="Auth-form" >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to="/login">
                <span className="link-primary">Sign In</span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <br />
              <input
                type="text"
                id="name"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <br />
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="Email Address"
               onChange={(e) => setEmail(e.target.value) }
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <br />
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary"
               onClick={() => handleSignin()}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Singin;
