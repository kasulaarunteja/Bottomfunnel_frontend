import React from 'react';
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useState, useEffect} from "react";
import { signupHandler } from '../Redux/action';
import axios from 'axios';


const Singin = () => {
  
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [pass, setPass] = useState("")

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const {loading,auth} = useSelector((store) => store)
  // useEffect(() => {
  //   if(auth === true){
  //     navigate("/login")
  //   }
  // },[auth])

  // const baseurl = `http://localhost:8080`

  // const handleSignin = () => {
  //   let url = `${baseurl}/register`;
  //   let data = {
  //     name :name,
  //     email:email,
  //     password: pass
  //   }
  //   dispatch(signupHandler([url, data]))
  // }
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
})

const handleChange = (e) =>{
    const {id, value} = e.target;
    setUser({...user, [id] : value})
}

const navigate = useNavigate();

const [registered, setRegistered] = useState(false);

if(registered){
    navigate("/")
}

const handleClick = (e) =>{
    e.preventDefault();
    // console.log(user)
    setRegistered(false);
    axios.post("https://elegant-jersey-hen.cyclic.app/register", user).then((res) => {
        // console.log(res.data);
        alert("register successfull")
        setRegistered(true);
    }).catch((err) => {
        console.log(err)
    })
}


return (
<div className="Auth-form-container">
  <form className="Auth-form" onSubmit={handleClick}>
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign up</h3>
      <div className="text-center">
        Already registered?{" "}
        <Link to="/">
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
         onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </form>
</div>
    );
}

export default Singin;
