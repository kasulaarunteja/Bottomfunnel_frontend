
import React from 'react';
import "./Login.css"
import { Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <Link to="sing">
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
              />
            </div>
            <br />
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
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
