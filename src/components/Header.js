import React from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase"
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }
  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png" alt="logo"/>
       {user && ( <div className='flex p-2'>
          <img 
          className='w-10 h-10'
          alt='usericon' src= {user.photoURL}/>
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>
        )}
    </div>
  )
}

export default Header