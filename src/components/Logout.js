import React, { useContext } from 'react';
import { adminContext } from '../context/AdminState';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout, isAdminLoggedIn } = useContext(adminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='d-flex justify-content-end p-4'>
        {isAdminLoggedIn && <button className='btn btn-info' onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Logout;
