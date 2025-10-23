import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { checkValidData } from '../utils/valdiator';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [signUpform, setSignUpform] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  
  const toggleSignUpform = () => {
    setSignUpform(!signUpform);
    setErrorMessage(null);
  };
  
  const responseHandler = () => { 
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPass = signUpform ? confirmPasswordRef.current?.value : null;
    
    const checker = checkValidData(email, password, confirmPass);
    setErrorMessage(checker);
    
    if (checker === null) {
      if (signUpform) {
        // Sign Up: First create user, then update their profile
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            // Get form values
            const firstName = firstNameRef.current?.value || '';
            const lastName = lastNameRef.current?.value || '';
            const phoneNumber = phoneRef.current?.value || '';
            
            // Update the user's profile with full name
            return updateProfile(user, {
              displayName: `${firstName} ${lastName}`,
              photoURL: null 
            }).then(() => {
    
              navigate('/browser');
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
          });
      } else {
        // Sign In
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate('/browser');
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
          });
      }
    }
  };
  
  return (
    <div className='absolute'>
      <Header />
      <div>
        <img 
          src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png"
          alt="Login" 
        />
      </div>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center bg-black/75 p-8 rounded-lg gap-4 w-100'
      >
        <h1 className='text-white font-bold text-3xl mb-2'>
          {signUpform ? "Sign Up" : "Sign In"}
        </h1>
        
        {signUpform && (
          <input 
            ref={firstNameRef}
            className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="text" 
            placeholder='First Name' 
          />
        )}
        
        {signUpform && (
          <input 
            ref={lastNameRef}
            className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="text" 
            placeholder='Last Name' 
          />
        )}
        
        <input 
          ref={emailRef} 
          className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
          type="email" 
          placeholder='Email' 
        />
        
        {signUpform && (
          <input 
            ref={phoneRef}
            className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="tel" 
            placeholder='Phone Number' 
          />
        )}
        
        <input 
          ref={passwordRef}
          className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
          type="password" 
          placeholder='Password' 
        />
        
        {signUpform && (
          <input 
            ref={confirmPasswordRef}
            className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="password" 
            placeholder='Confirm Password' 
          />
        )}
        
        {errorMessage && (
          <p className='text-red-500 font-bold text-sm items-center w-full'>
            {errorMessage}
          </p>
        )}
        
        <button 
          onClick={responseHandler} 
          className='bg-red-600 text-white p-2.5 w-full mt-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium'
        >
          {signUpform ? "Sign Up" : "Sign In"}
        </button>
        
        <p 
          className='px-4 text-white cursor-pointer hover:text-gray-300' 
          onClick={toggleSignUpform}
        >
          {signUpform
            ? "Already Registered? Sign In"
            : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;