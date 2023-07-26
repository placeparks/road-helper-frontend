import React, { useState, useContext } from 'react';
import { adminContext } from '../context/AdminState';

const Update = () => {
  const { updateUser } = useContext(adminContext);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleRegNo, setVehicleRegNo] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
      username,
      firstName,
      lastName,
      vehicleRegNo,
      contactNumber,
      emergencyContactNumber,
      gender,
      vehicleType
    };
    const response = await updateUser(userId, updateData);
    if (response.success) {
      alert('Profile updated successfully');
    } else {
      alert('Failed to update profile');
    }
  };

  return (
    <div className="container">
    <h1>Update Profile</h1>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input type="text" className="form-control" placeholder="Enter user ID" value={userId} onChange={e => setUserId(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Enter new username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="Enter new first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="Enter new last name" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Vehicle Registration Number</label>
          <input type="text" className="form-control" placeholder="Enter new vehicle registration number" value={vehicleRegNo} onChange={e => setVehicleRegNo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" className="form-control" placeholder="Enter new contact number" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Emergency Contact Number</label>
          <input type="text" className="form-control" placeholder="Enter new emergency contact number" value={emergencyContactNumber} onChange={e => setEmergencyContactNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select className="form-control" value={gender} onChange={e => setGender(e.target.value)}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vehicle Type</label>
          <input type="text" className="form-control" placeholder="Enter new vehicle type" value={vehicleType} onChange={e => setVehicleType(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary mt-4">Update Profile</button>
      </form>
    </div>
   </div>
    </div>
  );
};

export default Update;
