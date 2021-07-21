import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { SearchIcon } from "@material-ui/icons/Search"

class Header extends Component{
    render(){  

    return(
        <div className='header'>
             <header id="header" class="fixed-top d-flex align-items-center">
             <div class="container d-flex align-items-center justify-content-between">

            <div class="logo">
                <h1>Ride Sharing</h1>
            
               
            </div>

                <nav id="navbar" class="navbar">
                    <ul>
                    <li>Home</li>
                    <li>About</li> 
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Booking</li>
                    <li>Contact</li>
                   
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
       </div>
    )
    
 }
}
export default Header;