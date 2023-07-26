import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminContext } from '../context/AdminState';

const CallCenter = () => {
  const [id, setId] = useState('');
  const CallCenterId = 'hannan123';
  const navigate = useNavigate();
  const { setCallCenterLoggedIn, users } = useContext(adminContext);
  const handleLogin = () => {
    if (id === CallCenterId) {
      setCallCenterLoggedIn(true);
      navigate('/options');
    } else {
      alert('Invalid Call Center ID');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={id} 
        onChange={e => setId(e.target.value)} 
        placeholder="Enter CallCenter ID" 
      />
      <button className='btn btn-info' onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default CallCenter;
