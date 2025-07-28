import React, { useState } from 'react'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router'

function Signup() {
    const [formInput,setFormInput]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const onChangeInput=(e)=>{
        const {name,value}=e.target
        setFormInput((prev)=>({
            ...prev,[name]:value
        }))
    }

    const signUp=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            formInput.email,
            formInput.password
        ).then((userAuth)=>{
            console.log(userAuth)
        }).catch((error)=>{
            alert(error)
        })
        navigate("/")
    }
    return (
        <div className='signup_show'>
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <input value={formInput.email} name='email' onChange={onChangeInput} type="email" placeholder='Email' />
                <input value={formInput.password} onChange={onChangeInput} name='password' type="password" placeholder='Password' />
                <button type='submit'>Sign Up</button>
            </form>    
        </div>
    )
}

export default Signup
