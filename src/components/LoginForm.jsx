import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setShowRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const bodyObj = {
      email: email,
      password: password
    };

    const res = await axios.post("/api/login", bodyObj);
    
    // TODO: save userId to Redux state

    if (res.data.success) {
      // clears input fields
      setEmail('');
      setPassword('');
      
      // navigates to index (dashboard)
      navigate('/');
    }
  }

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      
      <form onSubmit={handleLogin}>
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            value={email}
            type="email"
            id='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          {/* <label htmlFor='password'>Password:</label> */}
          <input
            value={password}
            type="password"
            id='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>

      <div>
        <span>New user?</span>
        {/* QUESTION: Should I use a React state or Redux state determine showRegister??? */}
        <button onClick={() => setShowRegister(true)}>Register Here</button> 
      </div>
    </>
  )
}

export default LoginForm