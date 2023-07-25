import React, { useContext } from 'react';
import { adminContext } from '../context/AdminState';
import UserCard from './UserCard';

const UsersList = () => {
  const { users } = useContext(adminContext);

  return (
    <div className='cards'>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}

    </div>
</div>
  );
};

export default UsersList;
