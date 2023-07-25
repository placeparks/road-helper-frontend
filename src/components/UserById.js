import React, { useState, useContext } from 'react';
import { adminContext } from '../context/AdminState';

const UserById = () => {
  const [id, setId] = useState('');
  const [user, setUser] = useState(null);
  const { getUserById } = useContext(adminContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = await getUserById(id);
    setUser(userData);
  };

  return (
    <div className='pt-4'>
        <h1 className='pb-4'>Please Enter the Id</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={id} 
          onChange={e => setId(e.target.value)} 
          placeholder="Enter user ID" 
        />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div className='pt-4'>
        
          <p>User Nme: {user.username}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Vehicle Registration No: {user.vehicleRegNo}</p>
          <p>Contact Number: {user.contactNumber}</p>
          <p>Emergency Contact Number: {user.emergencyContactNumber}</p>
          <p>Gender: {user.gender}</p>
          <p>Vehicle Type: {user.vehicleType}</p>
        </div>
      )}
    </div>
  );
};

export default UserById;
