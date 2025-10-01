import React from 'react'
import Header from './Header'
import { checkValidData } from '../utils/valdiator'
import { useRef } from 'react'

const Login = () => {
  const [signUpform, setSignUpform] = React.useState(false)
  const[errorMessage,setErrorMessage]=React.useState(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  
  const confirmPassword=useRef(null);
  
  const toggleSignUpform = () => {
    setSignUpform(!signUpform);
  }
  
  const responseHandler = () => { 
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPasswordRef = signUpform ? confirmPassword.current?.value : null;
    // console.log(email, password, confirmPasswordRef);
    
    
    const checker = checkValidData(email, password, confirmPasswordRef);
    setErrorMessage(checker);
  }
  
  return (
    <div className='absolute'>
      <Header />
      <div>
        <img src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png"
          alt="Login" />
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
      }}
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center bg-black/75 p-8 rounded-lg gap-4 w-100'>
        <h1 className='text-white font-bold text-3xl mb-2'>{signUpform ? "Sign Up" : "Sign In"}</h1>
        
        {signUpform && (
          <input 
            className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="text" 
            placeholder='First Name' 
          />
        )}
        
        {signUpform && (
          <input 
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
        
        <p className='text-red-500 font-bold mt-.5'>{errorMessage}</p>
        
        {signUpform && (
          <input 
            ref={confirmPassword}
            className='bg-gray-100 p-2.5 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
            type="password" 
            placeholder='Confirm Password' 
          />
        )}
        
        <button 
          onClick={responseHandler} 
          className='bg-red-600 text-white p-2.5 w-full mt-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium'>
          {signUpform ? "Sign Up" : "Sign In"}
        </button>
        
        <p className='px-4 text-white cursor-pointer hover:text-gray-300' onClick={toggleSignUpform}>
          {signUpform
            ? "Already Registered? Sign In"
            : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  )
}

export default Login
