import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom';

import axios from 'axios'

import './Navbar.css'
import AuthContext from '../../context/AuthContext';
import AccountMenu from '../AccountMenu/AccountMenu';


const Navbar = () => {

  axios.defaults.baseURL="http://localhost:8000/api/v1/products"

  let {user,getProfile,name} = useContext(AuthContext)

  const [categories,setCategories] = useState([])
  const [isShown, setIsShown] = useState(false);

  useEffect(()=>{
    fetchCategories()
    if(user)
        getProfile(user.user_id)
  },[])

  const fetchCategories = () =>{
    axios.get('/categories/').then((response)=>{
        setCategories(response.data.data);
      }).catch(err=>{
        alert(err)
    })
  }

  return (
    <section id='navbar'>
        <div className='nav-top'>
            <div className='nav-left'>
                <h1>
                    <Link to='#'><img src='/images/amazon_logo.png' alt="logo" /></Link>
                </h1>
                <div className='location'>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                        <p>Hello</p>
                        <p>Select your location</p>
                    </div>
                </div>
            </div>
            <div className='nav-middle'>
                <div className='category'>
                    <select>
                        <option>All</option>
                    </select>
                </div>
                <form className='search-form'>
                    <input type="text" />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className='nav-right'>
                <div>
                    <img src="/images/icons/flag.png" alt='flag' />
                    <span><i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    <p>Hello, {user? name : "Sign in"}</p>
                    <p>Account & Lists <i className="fa-solid fa-caret-down"></i></p>
                    {isShown && <AccountMenu/>}
                </div>
                <div>
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>
                <div>
                    <p className='cart-count'>0</p>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    <span>Cart</span>
                </div>               
            </div>
        </div>
        <div className='nav-bottom'>
            <div>
                <i className="fa-solid fa-bars"></i>
                <span>All</span>
            </div>
            <ul>
                {categories.map((category)=>{
                    return(
                        <li key={category.id}>
                            <Link to="#">{category.name}</Link>
                        </li>
                    )
                })
                }                
            </ul>
            <div className='amazone-prime'>
                <Link to="#"><img src="/images/amazone-prime.jpg" alt="amazon prime" /></Link>
            </div>
        </div>
    </section>
  )
}

export default Navbar