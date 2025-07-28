import React, { useEffect } from "react"
import HomeScreen from "./components/HomeScreen"
import { Outlet, useNavigate } from "react-router-dom"
import Login from "./components/login_screen_component/Login"
import { auth } from "../firebase"
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "../features/userSlice"
import ProfileScreen from "./components/ProfileScreen"

function App() {
const user=useSelector(selectUser)
const dispatch=useDispatch()
const navigate=useNavigate

useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      // User signed in
        console.log(userAuth)
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
      })
    )
    }else{
      // User is signed out
      dispatch(logout())
      
    }
  })
  return unsubscribe
},[dispatch,navigate])

  return (
      <div className="wrapper">
        {!user ?(
          <Login/>
        ):(
      <>
      
      <Outlet /> 
      </>
        )}
      </div>
  )
}

export default App
