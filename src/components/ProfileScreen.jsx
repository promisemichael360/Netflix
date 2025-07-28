import React from 'react'
import Navbar from './home_screen_component/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

function ProfileScreen() {
    const user=useSelector(selectUser)
    return (
        <div className='profile_screen'>
            <Navbar/>
            <div className="profileScreen_contain">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="./avater.png" alt="Avater" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                        </div>
                        <div className="profileScreen_plans">
                            <button onClick={()=>auth.signOut()} className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
