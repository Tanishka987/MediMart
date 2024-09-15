import React from 'react'

function HeroSection() {
  return (
    <div style={{ backgroundColor: '#daf0ff', display: 'flex' }}>
    <img 
        src="https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?w=1060&t=st=1726408660~exp=1726409260~hmac=dea9a8a90fa4e3f175c10bff6515aaaae5fbeada20d392e2ebb5dd02779fd05c" 
        alt="" 
        style={{ maxWidth: '70%', height: 'auto', marginRight: '20px' }}
    />
    <div style={{ maxWidth: '50%',marginTop:'40px' }}>
        <h5 style={{ color: '#333',fontSize:'50px',alignItems: 'center',textAlign:'center',fontWeight:'bold' }}>Your Health,</h5>
        <h5 style={{ color: '#006699',fontSize:'50px',alignItems: 'center',textAlign:'center',fontWeight:'bold' }}>Our Priority</h5>
        <p style={{ color: '#333', fontSize: '20px',marginTop:'20px',alignItems: 'center',textAlign:'center',fontWeight:'normal' }}>
            MediMart offers the best healthcare solutions at your fingertips. <br/>Stay healthy and happy with MediMart!
        </p>
    </div>
    </div>
  )
}

export default HeroSection