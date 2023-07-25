import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminContext } from '../context/AdminState';

const AdminLogin = () => {
  const [id, setId] = useState('');
  const adminId = 'mirac123';
  const navigate = useNavigate();
  const { setAdminLoggedIn, users } = useContext(adminContext);

  const handleLogin = () => {
    if (id === adminId) {
      setAdminLoggedIn(true);
      navigate('/options');
    } else {
      alert('Invalid admin ID');
    }
  };

  return (
    <div>
      <h1 className=' mt-4 pb-4'>Welcome Please enter the Admin Id to log in</h1>
      <input 
        type="text" 
        value={id} 
        onChange={e => setId(e.target.value)} 
        placeholder="Enter admin ID" 
      />
      <button className='btn btn-info' onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default AdminLogin;
