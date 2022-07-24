import React from 'react'
import LoginOrRegisterForm from '../components/LoginOrRegisterForm'

export default function RegisterPage() {
  return (
    <div style={{
        width: "100%",
          height: "100%",
          margin: "auto",
          backgroundImage: `url("https://media.istockphoto.com/photos/beautiful-valley-with-a-river-blue-sky-with-large-clouds-and-bright-picture-id1305038827?b=1&k=20&m=1305038827&s=170667a&w=0&h=ciVlRQnkZgsO9Ccz0c6iHz0HI_pOozq5UGwjy2-LRyU=")`,
          padding: "20px 20px 20px 20px",
          position: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
  
      }}>
        <LoginOrRegisterForm loginOrRegister={"register"} />
      </div>
  )
}
