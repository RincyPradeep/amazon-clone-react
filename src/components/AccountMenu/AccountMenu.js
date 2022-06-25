import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import AuthContext from '../../context/AuthContext';

import './AccountMenu.css'


const AccountMenu = () => {
  let {logoutUser,user} = useContext(AuthContext)

  return (
    <section id="account-menu">
        <div className='top'>
          {user ?
            <button onClick={logoutUser} className='btn'>Logout</button> :
            <Link to="/login" className='btn'>Sign in</Link> 
          }
            <h6>New customer? <Link to="/signup">Start here.</Link></h6>
        </div>
        <div className='bottom'>
            <div className='bottom-left'>
            <h6>Your Lists</h6>
              <ul>
                <li><Link to="#">Create a Wish List</Link></li>
                <li><Link to="#">Wish from Any Website</Link></li>
                <li><Link to="#">Baby Wishlist</Link></li>
              </ul>
            </div>
            <div className='bottom-right'>
              <h6>Your Account</h6>
              <ul>
                <li><Link to="/profile">Your Profile</Link></li>
                <li><Link to="#">Your Orders</Link></li>
                <li><Link to="#">Your Wishlist</Link></li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default AccountMenu