
import React from 'react';
import "./Login.css"
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginHandler } from '../Redux/action';
import axios from 'axios';
import Cookies from 'js-cookie';




const Login = () => {
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const[check, setCheck] = useState(false);
   const [ loading, setLoading] = useState(false);

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const {auth} = useSelector((store) => store)
      useEffect(() =>{

       },[auth])
       

       const handleCheck = () => {
        if(check === false){
          setCheck(true)
        }else{
          setCheck(false)
        }
       }

       const baseUrl = `http://localhost:8080`

       const handleSigin = () => {
          let data = {
            email:email,
          password:pass,  
         
        }
        singin(data)
       }
      
       async function singin(user) {
        setLoading(true)
        await axios.post(`${baseUrl}/login`)
        .then((res) => {
          alert("login successful!")
          setLoading(false)
          if(check === true){
            localStorage.setItem('token' , JSON.stringify(res.data.token))

          }
           Cookies.set('auth' , res.data.token)
           navigate("/home")
        })
        .catch(err => {
          alert(err.response.data.status +", Please provide right credentials")
          setLoading(false)
        })
       }



    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <Link to="/">
                <span className="link-primary">Sign Up</span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <br />
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <br />
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary"
              onClick={() => handleSigin()}
              >
                Submit
              </button>
              {/* <button className="btn btn-primary ww-100 mb-4">
                <span className="fa fa-google me-4">
                  </span> sing in with Google</button> */}
            </div>
          </div>
        </form>
      </div>
    );
}

export default Login;
