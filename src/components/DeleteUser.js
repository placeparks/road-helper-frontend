import React, { useState, useContext } from 'react';
import { adminContext } from '../context/AdminState';

const DeleteUser = () => {
  const [id, setId] = useState('');
  const { deleteUser } = useContext(adminContext);

  const handleDelete = async () => {
    const data = await deleteUser(id);
    if (data.success) {
      alert('User successfully deleted');
      setId('');
    } else {
      alert('Error deleting user');
    }
  };

  return (
    <div>
      <h1 className=' mt-4 pb-4'>Delete User</h1>
      <input 
        type="text" 
        value={id} 
        onChange={e => setId(e.target.value)} 
        placeholder="Enter user ID" 
      />
      <button className='btn btn-info' onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
