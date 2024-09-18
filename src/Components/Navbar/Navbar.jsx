<<<<<<< HEAD
import React, { useContext, useState, useRef } from 'react'
=======
import React, { useContext, useState } from 'react'
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
<<<<<<< HEAD
import nav_dropdown from '../Assets/nav_dropdown.png'
=======
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
<<<<<<< HEAD
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
=======
    const{getTotalCartItems} = useContext(ShopContext);
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Shopper</p>
            </div>
<<<<<<< HEAD
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
            <ul ref={menuRef} className="nav-menu">
=======
            <ul className="nav-menu">
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
<<<<<<< HEAD
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
=======
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div class="nav-cart-count">{getTotalCartItems()}</div>
>>>>>>> 773aef335b5b47a4485cf582f35d52e3e8ebd760
            </div>
        </div>
    )
}

export default Navbar