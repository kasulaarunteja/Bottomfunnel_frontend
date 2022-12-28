import React from 'react';
import "./Login.css";
import { Link} from "react-router-dom";


const Singin = () => {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form" >
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
