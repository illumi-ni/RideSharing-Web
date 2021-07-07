import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { SearchIcon } from "@material-ui/icons/Search"

class Header extends Component{
    render(){  
    return(
<div className='header'>
        <Link to ="/">
        
        </Link>
            <div className ="header_search">
                    <input className="header_searchInput" type="text"/>
                    {/* <SearchIcon className="header_searchIcon"/> */}
                    </div>
                    <div className="header_nav">
                    
                    <Link to ="/profile">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello {localStorage.getItem('username')}</span>
                        <span className='header_optionLineTwo'>My Profile</span>

                    </div>
                    </Link>
                    <Link to="/Home">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Home</span>
                    </div>
                    </Link>
                    
                   
                    <Link to ="/about">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'> About Us</span>
                    </div>
                    </Link>
                    <Link to="/service">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Service</span>
                    </div>
                    </Link>

                    <Link to="/book">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Book</span>
                    </div>
                    </Link>

                    <Link to="/order">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Contact Us</span>
                    </div>
                    </Link>

                    
                   
                    {/* <Link to='/logout'>
                    <div className = 'header_option'>
                        <span className='header_optionLineTwo'  onClick={logout}>Logout </span>
                    </div>
                    </Link> */}

                   
                </div>
            
                    </div>
    )
                    }
                }
                
                export default Header;