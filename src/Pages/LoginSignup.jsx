import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => { 
    return ( 
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div classname="loginsignup-fields">
                    <input type="text" placeholder='your name' />
                    <input type="email" placeholder='email address' />
                    <input type="password" placeholder='password' />
                </div>
                <button>Continue</button>
                <p classname="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div classname="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        
        </ div>
    )
}

export default LoginSignup