import React from 'react'

function Home() {
  return (
   
    
    <div>
      <h1 className='pb-4'>Welcome to Admin Panel of QR Tracker App</h1>
     
      <div className="dropdown">
  <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Roles
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/adminlogin">Admin</a></li>
    <li><a className="dropdown-item" href="/callcenter">Call Center</a></li>
    <li><a className="dropdown-item" href="#">Organizations</a></li>
  </ul>
</div>
    </div>
    

  )
}

export default Home

