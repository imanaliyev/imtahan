import React from "react";
import { Link,NavLink } from "react-router-dom";
import './navbar.scss'
function Navbar() {

  const openNav =()=>{
    document.querySelector(".menu").classList.toggle("open")
  }
  return (
    <header>
      <nav>
        <div className="logo">
        <NavLink to={'/'}>  <img
            src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png"
            alt=""
          /></NavLink>
        </div>
        <ul>
          <NavLink to={"/"}>
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to={"/add"}>
            {" "}
            <li>Add</li>
          </NavLink>
          <NavLink to={"/wishlist"}>
            {" "}
            <li>Wishlist</li>
          </NavLink>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Menu</li>
        </ul>
        <div className="icons">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </nav>
      <div className="responsive-nav">
      <div className="logo">

        <NavLink to={'/'}>  <img
            src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png"
            alt=""
          /></NavLink>
        </div>
        <div className="menu">
        <button onClick={openNav}><i class="fa-solid fa-bars"></i></button>
        <ul>
          <NavLink to={"/"}>
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to={"/add"}>
            {" "}
            <li>Add</li>
          </NavLink>
          <NavLink to={"/wishlist"}>
            {" "}
            <li>Wishlist</li>
          </NavLink>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Menu</li>
        </ul>
        

        </div>

      
       </div>


    </header>
  );
}

export default Navbar;
