import React from 'react';
import './Profile.css';
import Nav from '../NavBar/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import Plans from '../Plans/Plans';

function Profile() {

    const user = useSelector(selectUser);
    return (
        <div className='profile'>
            <Nav />
            <div className='profile-body'>
                <h1>Edit Profile</h1>
                <div className='profile-info'>
                    <img src='https://pbs.twimg.com/media/GB2vydcX0AAgt5f.png'
                    alt=''/>

                    <div className='profile-details'>
                        <h2>{user.email}</h2>
                        <div className='profile-plans'>
                            <h3>Current Plan</h3>
                            <p>Renewal Date: 02/1/2025</p>
                            <Plans />
                            <button onClick={() => auth.signOut()} className='profile-signOut'>Sign Out</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
};

export default Profile;
