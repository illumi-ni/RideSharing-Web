import React, { Component } from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';
// import { SearchIcon } from "@material-ui/icons/Search"

class Header extends Component{
    render(){  
    return(
<div className='header'>
        
            <div className ="header_search">
                    <input className="header_searchInput" type="text"/>
                  
                    </div>
                    <div className="header_nav">
                    
                    
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello</span>
                        <span className='header_optionLineTwo'>My Profile</span>

                    </div>
                   
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Home</span>
                    </div>
                   
                    
                   
                   
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'> About Us</span>
                    </div>
                   
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Service</span>
                    </div>
                   
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Book</span>
                    </div>
                   
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Contact Us</span>
                    </div>
                  

                    
                   
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