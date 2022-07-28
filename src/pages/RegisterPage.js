import React from 'react'
import LoginOrRegisterForm from '../components/LoginOrRegisterForm'
import NavBar from "../containers/NavBar";
import Footer from "../components/Footer";
export default function RegisterPage() {
  return (
    <div style={{
        width: "100%",

          margin: "auto",
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          position: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
  
      }}>
        <NavBar/>
        <br/><br/>
        <LoginOrRegisterForm loginOrRegister={"register"} />
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
        
      </div>
  )
}
