import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setShowRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userId)

  const handleLogin = async (e) => {
    e.preventDefault();

    const bodyObj = {
      email: email,
      password: password
    };

    const res = await axios.post("/api/login", bodyObj);

    if (res.data.success) {
      // saves userId to redux
      dispatch({
        type: 'USER_AUTH',
        payload: res.data.userId
      });

      // clears input fields
      setEmail('');
      setPassword('');
      
      // navigates to index (dashboard)
      navigate('/');
    } else {
      // TODO: change to toastify
      setErrorMessage(res.data.message)
    };
  };

  return (
    <div className='flex flex-col items-center pt-20'>
      <div>
        <h1 className='text-4xl mb-7'>Login</h1>
      </div>

      <div>
        {/* TODO: change to toastify */}
        {errorMessage &&
          <p>{errorMessage}</p>
        }
      </div>
      
      <form onSubmit={handleLogin}>
        <div>
          <input
            className='border-blue-medium border-2 rounded-md p-1 my-1'
            value={email}
            type="email"
            id='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            className='border-blue-medium border-2 rounded-md p-1 my-1 mb-4'
            value={password}
            type="password"
            id='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex justify-center'>
          <button
            className='bg-blue-light rounded-md text-white px-4 py-1 mb-10 text-xl'
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <div>
        <span>New user? </span>
        <button 
          className='border-2 border-blue-light rounded-md px-4 py-1 text-sm text-blue-light'
          onClick={() => setShowRegister(true)}
        >
          Register Here
        </button> 
      </div>
    </div>
  )
}

export default LoginForm