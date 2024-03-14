// import React from 'react'
// import Header from './Header'

// const Login = () => {
//   return (
//     <div>
//         <Header/>
//     <div className="bg-cover bg-center h-screen w-screen" style={{backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg")'}}>
//         <div/>
//     </div>
//   )
// }

// export default Login




import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <div className=" absolute bg-cover bg-center h-screen w-screen" style={{backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg")'}}>
      </div>

      <form className=' absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold py-4 text-3xl'>{isSignInForm? "Sign In" : "Sign Up"}</h1>

       {!isSignInForm &&( <input 
        type="text" 
        placeholder='Full Name' 
        className='p-4 my-4 w-full  bg-gray-700'/>)}
        <input
         type="text"
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700'/>

       <input 
        type="password" 
        placeholder='password' 
        className='p-4 my-4 w-full  bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix Sign Up Now" : "Already registered Sign In Now"} </p>

      </form>
    </div>
  );
}

export default Login;
