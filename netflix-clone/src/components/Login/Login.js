import React from 'react'; 
import './Login.css';
import { useState } from 'react';

function Login() {

    const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
        <div className='login-bg'>
            <img className='login-logo' src='https://www.freeiconspng.com/uploads/netflix-icon-21.jpg' alt=''/>

            <button onClick={() => setSignIn(true)} className='login-button'>Sign In</button>
            <div className='login-gradient' />
        </div>
        

        <div className='login-body'>

            {/* {signIn ? (
                <SignInScreen />
            ) : ( */}
                <>
                    <h1>Unlimited movies, TV Shows and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Create an account to continue </h3>

                    <div className='login-input'>
                        <form>
                            <input type='email' placeholder='Email Address'/>
                            <button onClick={() => setSignIn(true)} className='login-getStarted'>Get Started</button>
                        </form> 
                    </div>
                </>
            {/* )} */}
        </div>
    </div>
  )
}

export default Login;
