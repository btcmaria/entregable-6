import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'> 
        <input type="checkbox" id='check' />
        <label htmlFor="check" className='check__btn'>
        <i className='bx bx-menu bx-rotate-180'></i>
        </label>
        <a href="#" >
        <h1 className='header__title'>
            <Link className='enlace' to={"/"}>e-commerce</Link>
            </h1>
        </a>
            <ul className='header__nav-list'>
                <li>
                    <Link to={"/register"}>Register</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Cart</Link>
                </li>

                <li>
                    <Link to={"/purchase"}>Purchases</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header