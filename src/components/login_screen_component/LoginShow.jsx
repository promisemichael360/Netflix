import React, { useState } from 'react'
import { auth } from '../../../firebase'
import Signup from '../signup_screen_component/Signup'
import { useDispatch } from 'react-redux'
import { login } from '../../../features/userSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'
// import { createUserWithEmailAndPassword } from 'firebase/auth'


const LoginShow = ({email}) => {
    const [formInput,setFormInput]=useState({
        email: email || "",
        password:""
    })
    const [signupShow,setSignupShow]=useState(false)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()



    const dispatch=useDispatch()
    
const onChangeInput=(e)=>{
    const {name,value}=e.target
    setFormInput(prev => ({
        ...prev,[name]:value

    }))
    
    // console.log(e.target)
    return e
}

const signIn = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(
            auth,
            formInput.email,
            formInput.password
        );
        
        // On successful login, dispatch user data to Redux
        const user = userCredential.user;
        dispatch(login({
            uid: user.uid,
            email: user.email,
            // Never store password in Redux!
        }));
        navigate("/")
        
    } catch (err) {
        setError(err.message);
        console.error("Login error:", err);
    } finally {
        setLoading(false);
    }
};

    
    return (
        <div className='login_show'>
            {signupShow ?(
                <Signup/>
            ):(
            <form onSubmit={signIn}>
                {error &&(<div className='text-red-500'>{error}</div>)}
                <h1>Sign In</h1>
                <input value={formInput.email} name='email' onChange={onChangeInput} type="email" placeholder='Email' />
                <input value={formInput.password} onChange={onChangeInput} name='password' type="password" placeholder='Password' />
                <button type='submit'>{loading ? 'Signing In...':'Sign In'}</button>
                <h4><span className='loginShow_grey'>New to Netflix ?</span>
                <span className='loginShow_link' onClick={()=>setSignupShow(true)}> Sign Up now</span></h4>
            </form>
            )}
        </div>
    )
}

export default LoginShow
