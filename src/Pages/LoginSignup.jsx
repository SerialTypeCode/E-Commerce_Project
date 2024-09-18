<<<<<<< HEAD
import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async ()=>{
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method: 'POST',
            headers:{
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success)
        {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errros);
        }
    }

    const signup = async ()=>{
        console.log("Signup Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method: 'POST',
            headers:{
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success)
        {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else
        {
            alert(responseData.errors);
        }
    }

    return( 
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='your name' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"
                ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
                :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
                <div className="loginsignup-agree">
=======
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
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
<<<<<<< HEAD
=======
        
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
        </ div>
    )
}

export default LoginSignup