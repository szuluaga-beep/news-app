import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/images/Logo.png'
import './Navbar.css'

const Navbar = () => {
     return (
          <div className='navbar-style'>
               <img className='logo-navbar' src={logo}/>
               <ul className='navbar-list'>
                    <li>
                         <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                         <NavLink to='/news'>News</NavLink>
                    </li>
                    <li>
                         <NavLink to='/formNew'>Form New</NavLink>
                    </li>
                    <li>
                         <NavLink to='/tableNew'>Table</NavLink>
                    </li>
               </ul>
          </div>
     )
}

export default Navbar