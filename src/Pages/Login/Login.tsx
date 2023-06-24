import Navbar from '@/components/Navbar/Navbar'
import { useState } from 'react'
import styles from "./Login.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const [Username, setUsername] = useState("")
  function onChangeUsername(event: any) {
    setUsername(event.target.value)
  }
  const [Password, setPassword] = useState("")
  function onChangePassword(event: any) {
    setPassword(event.target.value)
    console.log("Password: " + Password)
  }
  const axios_instance = axios.create()

  function submitLogin(username: string, password: string) {
    axios_instance.post("http://localhost:3001/api/auth/login", {
      username: username,
      password: password
    }, { withCredentials: true }).then((response) => {
      console.log(response.data)
      if(response.data.message === "Login successful") {
        console.log("Login successful")
        navigate(response.data.redirect)
      }
    }).catch((error) => {
      console.log(error.response)
    })
  }

  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Login</h1>
        <div className={styles.loginForm}>
          <p className={styles.labelLogin}>Username</p>
          <input type="username" placeholder="Username" onChange={(e) => {onChangeUsername(e)}} className={styles.inputLogin}/>
          <p className={styles.labelLogin}>Password</p>
          <input type="password" placeholder="Password" onChange={(e) => {onChangePassword(e)}} className={styles.inputLogin}/>
          <button className={styles.submitLogin} onClick={() => {submitLogin(Username, Password)}}>Login</button>
        </div>
    </div>
  </div>
  )
}

export default Login