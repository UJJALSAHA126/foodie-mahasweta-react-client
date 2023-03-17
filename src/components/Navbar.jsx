import React, { useEffect } from 'react';
import logo from '../resources/logo/foodie_mahasweta_logo.jpg';
import menuImg from '../resources/logo/menu.png';
import menuCloseImg from '../resources/logo/cancel.png';
import './css/navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const toggleOptionList = () => {
        const menuBtn = document.getElementById("menu_btn");

        const navBar = document.getElementById("navBar");
        navBar.classList.toggle("back-color");


        const optionList = document.getElementById("option-list");
        optionList.classList.toggle("option-list-active");
        optionList.classList.toggle("back-color");

        if (optionList.classList.contains("option-list-active")) {
            menuBtn.src = menuCloseImg;
        }
        else {
            menuBtn.src = menuImg;
        }


    }

    const menuBtnOnclick = (e) => {
        toggleOptionList();
    }
    console.log(useLocation().pathname)

    useEffect(() => {
        const navBar = document.getElementById("navBar");
        console.log('height', navBar.offsetHeight);

    }, [])


    return (
        <>
            <nav id="navBar">
                <div className="name-logo">
                    <img className='logo' src={logo} alt='' />
                    <div className="name">
                        <span className="first">Foodie</span>
                        <span className="second">Mahasweta</span>
                    </div>
                </div>

                <div className="option-list" id="option-list">
                    <ul>
                        <li ><Link to="/"
                            className={useLocation().pathname === "/" ? "active-page" : ""} onClick={toggleOptionList}>Home</Link></li>
                        <li ><Link className={useLocation().pathname === "/food-creation" ? "active-page" : ""} to="/food-creation" onClick={toggleOptionList}>Food Creations</Link></li>
                        {/* <li ><Link to="/about-me">About Me</Link></li> */}
                        <li ><Link className={useLocation().pathname === "/contact-me" ? "active-page" : ""} to="/contact-me" onClick={toggleOptionList}>Contact Me</Link></li>
                        {/* <li><Link to="/users" style={{color: 'white'}} activeStyle={{color: 'red'}}>Users</Link></li> */}
                    </ul>
                </div>

                <img className="menu-btn active" id="menu_btn" src={menuImg} alt='' onClick={(e) => menuBtnOnclick(e)} />

            </nav>

            {/* <div className="top-margin-div"></div> */}
        </>
    )
}

export default Navbar