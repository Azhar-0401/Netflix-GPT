import React, { useState , useRef} from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =  () => {
        // validation of data
      
        console.log(email.current.value);
        console.log(password.current.value);
      const message =  checkValidData(email.current.value, password.current.value); 
    setErrorMessage(message); 
    if(message) return;

    // signIn/signUp logic
    if(!isSignInForm) {
        // Sign Up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +  "-" + errorMessage)
    // ..
  });
    }
    else{
        // Sign In logic

    }

    }

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

   
  return (
    <div>
      <Header />
      <div className=" absolute bg-cover bg-center h-screen w-screen" style={{backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg")'}}>
      </div>
 
      <form onSubmit= {(e) => e.preventDefault()  }  className=' absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold py-4 text-3xl'>{isSignInForm? "Sign In" : "Sign Up"}</h1>

       {!isSignInForm &&( <input 
       ref={name}
        type="text" 
        placeholder='Full Name' 
        className='p-4 my-4 w-full  bg-gray-700'/>)}
        <input
        ref={email}
         type="text"
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700'/>

       <input 
       ref={password}
        type="password" 
        placeholder='password' 
        className='p-4 my-4 w-full  bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{!isSignInForm ? "Sign Up" : "Sign In" }</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix Sign Up Now" : "Already registered Sign In Now"} </p>

      </form>
    </div>
  );
}

export default Login;
