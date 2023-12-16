/*import React from "react";
import { useState } from "react";

function AccountForm(){
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    function handleFormSubmit(){

    }

    return(
        <div>
        <form onSubmit={handleFormSubmit}>
            <input type="email" 
            onChange={(e)=>setEmail(e.target.value)} 
            onFocus={(e)=>setIsEmailFocused(true)} 
            value={email} 
            style={{borderColor: isEmailValid ? 'green' : isEmailFocused ? 'blue' : 'red'}}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default AccountForm;
*/

/*
import React, { useEffect, useState } from "react";

function AccountForm() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailFocused, setIsEmailFocused] = useState(null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordValid, setIsPassworsValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  function handleFormSubmit() {
    // Handle form submission logic here

  }

  useEffect(()=>{},[])



  useEffect(()=>{
    // Email validation using a simple regular expression
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsEmailValid(isValidEmail);
    if (isValidEmail) {
      // Valid email - do something (e.g., send data to backend, further processing)
      console.log('Valid email:', email);
    } else {
      // Invalid email - handle accordingly (e.g., show error message)
      console.log('Invalid email:', email);
    }
}, [email]);

  return (
    <>
        <form onSubmit={handleFormSubmit} className="container">
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                value={email}
                style={{
                    borderColor: isEmailValid ? "green" : isEmailFocused ? "blue" : "red",
                    // Additional styles if needed
                }}
             />
             <span>Enter a valid email id</span>

             <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
             <span class="pass" style={{display: password.length>=8 ? 'none' : 'block'}}>Password must be atleast 8 characters</span>

             <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
             <span>Passwords should match</span>


             <button type="submit">Submit</button>
        </form>
    </>
  );
}

export default AccountForm;*/


import React, { useState } from "react";


const AccountForm = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const userEmail = document.getElementById("user-mail");
    

    
    function handleSubmit(){
      if((email.endsWith("@gmail.com")) && (password.length>= 8) && (password === confirmPassword)){
        alert("User form submitted");
      }else if(password !== confirmPassword){
        alert("password not match")
      }
    }
    

    return(
      <form id="main-form" onSubmit={handleSubmit}>

        <div className="field" id="email">
          <label><b>Email:</b></label><br/>
          <input 
            type="email" 
            id="user-email" 
            name="email" 
            required
            onChange={e =>{setEmail(e.target.value)}}>
          </input>
          {
            email.endsWith("@gmail.com") ?  <p></p> : <p className="text">Invalid email format</p>
          }
          
        </div>

        <div className="field" id="password">
          <label><b>Password:</b></label><br/>
          <input 
            type="password" 
            id="user-password" 
            name="email" 
            required
            onChange={e =>{setPassword(e.target.value)}}>
          </input>
          {
            (password.length>= 8) ? <p></p> : <p className="text">Password must be at least 8 characters</p> 
          }
          
          
        </div>

        <div className="field" id="confirm-password">
          <label><b>Confirm Password:</b></label><br/>
          <input 
            type="password" 
            id="user-password-confirm" 
            name="email" 
            required
            onChange={e =>{setConfirmPassword(e.target.value)}}>
          </input>
          {
            (password === confirmPassword) && (password!=="") ? <p></p> : <p className="text">Password do not match</p> 
          }
          
        </div>

        <div className="field" id="btn-container">
          <button id="signup-btn">Sign Up</button>
        </div>
        
      </form>   
    )
}

export default AccountForm;