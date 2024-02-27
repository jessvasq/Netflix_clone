import React, {useRef} from 'react';
import './Register.css';
import { auth } from '../../firebase';

function Register() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault();

        // whenever the user clicks on the register button, the emailRef and passwordRef will be logged in the console, meaning that the user has successfully registered.
        //we'll get the email and password from the user and then we'll use the createUserWithEmailAndPassword method to create a new user with the email and password.
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authUser)=> {console.log(authUser)})
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        //preventDefault() is used to stop the default behavior of an element.It prevents the page from refreshing when the form is submitted.
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authUser)=> {console.log(authUser)})
        .catch((error) => {
            alert(error.message);
        });
    }

  return (
    <div className='register'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email'/>
            <input ref={passwordRef} placeholder='Password' type='password'/>
            <div className='submit-bttns'>
            <button className='submit-register' onClick={register}>Sign up</button>
            <button className='submit-register' onClick={signIn}>Sign in</button>

            </div>
            {/* <h4>
                <span className='register-gray'>New to netflix? </span>
                 <span className='register-link' onClick={register}>Sign Up now! </span> 
            </h4> */}
        </form>
    </div>
  )
}

export default Register
