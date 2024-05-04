import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Attempting login...');
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/lo', {
        username,
        password
      });
      
      console.log('Response:', response);
  
      if (response.data.message === 'Login successful') {
        localStorage.setItem('isLogin', 'true');
        navigate('/dashboard');
      } else {
        setError('Login failed. Please try again.');
      }
      
    } catch (error) {
      setError('Login failed');
    }
  };
  

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>} {/* Apply CSS class for error message */}
        <button type="button" onClick={handleLogin} className="login-button">Login</button> {/* Apply CSS class for button */}
      </form>
    </div>
  );
};

export default LoginPage;
