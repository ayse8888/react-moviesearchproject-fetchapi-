import React from 'react'

const Login = () => {
  return(
    <>
    <div className="login">
        <h3>Login With</h3>
        <input type="text" placeholder="Your User Name"/>
        <p className="or">OR</p>
        <input type="email" placeholder="Your Email Addres"/>
        <input type="password" placeholder="Password"/>
        <button type="submit" className="btn btn-dark">SUBMIT</button>
      </div>
    </>
  )
}

export default Login