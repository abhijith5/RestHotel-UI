import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div className="" style={{ backgroundColor: "#EBEBEB", height: "100vh" }}>
        <div className="uk-position-center">
          <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "5px 5px 10px", borderRadius: 5 }}>
            <button class="uk-button uk-button-primary" style={{ marginRight: 10 }}>Facebook</button>
            <button class="uk-button uk-button-primary" style={{backgroundColor:"brown"}}>Google</button>
            <h5 class="uk-heading-line uk-text-center" style={{ marginTop: 20 }}><span>OR USING EMAIL</span></h5>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="User Name" />
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Password" />
            </div>
            <p style={{ color: "#E95B28", fontWeight: 600 }}>Forgot Password?</p>
            <button class="uk-button uk-button-primary fresh-login" >Login</button>
            <hr></hr>
            <p>Dont have an account? <a href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login