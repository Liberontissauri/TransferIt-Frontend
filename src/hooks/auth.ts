import { AxiosInstance } from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export interface useUserConfig {
    axios_instance: AxiosInstance
    post_logout_url: string
    login_url: string
}

export interface User {
    data: {
        username: string,
        email: string,
        storage_limit: number,
        created_at: string,
        updated_at: string
    },
    logout: Function,
}

export function useUser(config: useUserConfig): User {
    const navigate = useNavigate()
    const axios = config.axios_instance
    const [user, setUser] = useState<User>({
        data: {username: "loading",
        email: "loading",
        storage_limit: 0,
        created_at: "loading",
        updated_at: "loading"},
        logout: () => {return "loading"}
    })

    useEffect(() => {
      axios.get("/api/profile").then(response => {
        setUser({
            data: response.data,
            logout: logout,
        })
      }).catch((err) => {
        let message
        if(!err.response || !err.response.data) throw err
        message = err.response.data.message
        if(!message || message !="not logged in") throw err
        
        navigate(config.login_url)
      })
    
    }, [])
    
    function logout() {
        axios.post("/api/auth/logout")
        navigate("/")
    }

    return user
}