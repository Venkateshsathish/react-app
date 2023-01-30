import React, { useState } from 'react';
export const Register=(props)=>{
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[name,setName]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className='auth-form-container'>
            <h2>Register</h2>
         <form className='register-form' onSubmit={handleSubmit}>
         <label htmlFor='name'>Full Name</label>
            <input value={name} type='name' placeholder="Enter the Fullname" id="Name" name="Name" />
            <label htmlFor='Email'>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}type='Email' placeholder="Enter the email Id" id="Email" name="email" />
            <label htmlFor='password'>password</label>
            <input value={pass}onChange={(e)=>setPass(e.target.value)} type='password' placeholder="*******" id="password" name="password" />
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn' onClick={()=>props.onFormSwitch('login')}>Already have an account?Login here</button>
        
        </div>
    )
}