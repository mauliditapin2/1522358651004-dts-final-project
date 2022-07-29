import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegisterForm";
import NavBar from "../containers/NavBar";
import Footer from "../components/Footer";
export default function LoginPage() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          margin: "auto",
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          paddingTop:'2em',
          position: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
        }}
      >
        <NavBar/>
        <br/><br/>
        <LoginOrRegisterForm loginOrRegister={"login"} />
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    </div>
  );
}
