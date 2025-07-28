import React from 'react'
import { useState } from 'react'
import LoginShow from './LoginShow'


function Login() {
    const [loginShow,setLoginShow]=useState(false)
    const [email,setEmail]=useState('')
    const emailLogin = (e) => {
        e.preventDefault();
        setLoginShow(true)
    }
    const onChangeInput=(e)=>{
        setEmail(e.target.value)
    }
    return (
        <div className='login_screen'>
            <div className="loginScreen_content">
                <img className='loginScreen_logo' src="../Netflix-logo.png" alt="Netflix" />
                <button className='loginScreen_button' onClick={()=>setLoginShow(true)}>Sign In</button>
                <div className="loginScreen_gradient"/>
            </div>
            <div className="loginScreen_body">
                {loginShow  ?(
                    <LoginShow email={email}/>
                ):(
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                <div className="loginScreen_input">
                    <form onSubmit={emailLogin}>
                        <input value={email} onChange={onChangeInput} type="email" placeholder='Email Address' />
                        <button type='submit' className="loginScreen_getStarted">GET STARTED</button>
                    </form>
                </div>
                </>
                )}
            </div>
        </div>
    )
}

export default Login
