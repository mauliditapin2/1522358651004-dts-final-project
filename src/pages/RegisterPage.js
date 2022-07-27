import React from 'react'
import LoginOrRegisterForm from '../components/LoginOrRegisterForm'

export default function RegisterPage() {
  return (
    <div style={{
        width: "100%",
          height: "100%",
          margin: "auto",
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          padding: "20px 20px 20px 20px",
          position: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
  
      }}>
        <LoginOrRegisterForm loginOrRegister={"register"} />
      </div>
  )
}
