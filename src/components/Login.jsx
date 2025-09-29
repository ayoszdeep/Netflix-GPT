import React from 'react'
import Header from './Header'

const Login = () => {
  const toggleSignUpform = () => {
    
  }
  return (
    <div className='absolute'>
        <Header/>
        <div> 
      <img src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png"
       alt="Login" />
    </div>
    <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center bg-black/90 p-8 rounded-lg'>
    <h1 className='text-white font-bold text-3xl'>Sign In</h1>
    
      <input className='bg-white p-2.5 w-55' type="text" placeholder='Email' />
      <input className='bg-white p-2.5 m-2 w-55' type="password " placeholder='Password' />
      <button className='bg-red-600 text-amber-50 p-2.5 w-55 rounded-md'>Sign in</button>
      <p className='px-4 text-white'onClick={toggleSignUpform}>New to netflix? Sign up now</p>
    </form>

    
        
    </div>
  )
}

export default Login
