import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'
import classes from './Navbar.module.css'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.wrapper}>
            <MyButton onClick={logout}>{'Log Out'}</MyButton>
            <div className={classes.links}>
                <Link className={classes.link} to="/about">
                    {'About'}
                </Link>
                <Link className={classes.link} to="/posts">
                    {'Posts'}
                </Link>
            </div>
        </div>
    )
}

export default Navbar
