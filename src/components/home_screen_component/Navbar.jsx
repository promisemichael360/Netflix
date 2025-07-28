import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [showDarkNavbar,setShowDarkNavbar] = useState(false)
    const navigate=useNavigate()
    const handleDarkNavbar=()=>{
        if(window.scrollY>100){
            setShowDarkNavbar(true)
        }else{
            setShowDarkNavbar(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleDarkNavbar)
        return ()=> window.removeEventListener('scroll',handleDarkNavbar)
    },[])
    return (
        <div className={`nav ${showDarkNavbar && 'nav_black'}`}>
            <div className='nav_content'>
                    <img onClick={()=>navigate("/")} className='nav_logo' src="../Netflix-logo.png" alt="" />
                    <img onClick={()=>navigate("/profile")} className='nav_avater'src="../avater.png" alt="" />
            </div>    
        </div>
    )
}

export default Navbar
