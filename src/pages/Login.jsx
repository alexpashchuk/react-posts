import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'
import classes from './Posts.module.css'

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className={classes.login}>
            <h1>{'Log In'}</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter your username" />
                <MyInput type="password" placeholder="Enter your login" />
                <MyButton>{'Log In'}</MyButton>
            </form>
        </div>
    )
}

export default Login
