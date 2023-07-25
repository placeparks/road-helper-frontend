import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{user.username}</h5>
          <p className="card-title">First Name: {user.firstName}</p>
          <p className="card-title">Last Name: {user.lastName}</p>
          <p className="card-text">
            Email: {user.email}
          </p>
          <p className="card-text">
            Vehicle Reg No: {user.vehicleRegNo}
          </p>
          <p>Contact Number: {user.contactNumber}</p>
          <p>Emergency Contact Number: {user.emergencyContactNumber}</p>
          <p>Gender: {user.gender}</p>
          <p>Vehicle Type: {user.vehicleType}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

