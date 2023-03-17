import React from 'react';
import logo from '../resources/logo/foodie_mahasweta_logo.jpg';
import menuImg from '../resources/logo/menu.png';
import './css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const getHeight = () => {

        const height = document.getElementById("navBar").height + "px";
        console.log('height', height);
        return height;
    }

    return (
        <>
            <nav id="navBar">
                <div className="name-logo">
                    <img className='logo' src={logo} />
                    <div className="name">
                        <span className="first">Foodie</span>
                        <span className="second">Mahasweta</span>
                    </div>
                </div>

                <div className="option-list">
                    <ul>
                        <li ><Link to="/">Home</Link></li>
                        <li ><Link to="/food-creation">Food Creations</Link></li>
                        {/* <li ><Link to="/about-me">About Me</Link></li> */}
                        <li ><Link to="/contact-me">Contact Me</Link></li>
                        {/* <li><Link to="/users" style={{color: 'white'}} activeStyle={{color: 'red'}}>Users</Link></li> */}
                    </ul>
                </div>

                <img className="menu-btn active" id="menu_btn" src={menuImg} />

            </nav>

            {/* <div className="top-margin-div"></div> */}
        </>
    )
}

export default Navbar