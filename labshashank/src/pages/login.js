import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation after login

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();  // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });  // Handling form input changes
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate('/');  // Navigate to Home page on success
    } else {
      console.error('Login failed');  // Log an error if login fails
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />  // Capture email
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />  // Capture password
      <button onClick={handleLogin}>Login</button>  // Submit login
    </div>
  );
}

export default Login;
