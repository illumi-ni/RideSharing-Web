import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { SearchIcon } from "@material-ui/icons/Search"

class Header extends Component{
    render(){  
 

       

     const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        window.location.href = '/'
     
    }

   

  
        if (localStorage.getItem('token')){
            
            var menu = 
                <div className="header_nav">
                    <Link to ="/profile">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello {localStorage.getItem('username')}</span>
                        <span className='header_optionLineTwo'>Welcome</span>

                    </div>
                    </Link>
                    <Link to="/service">
                    <div className = 'header_option'>
                       
                        <span className='header_optionLineTwo'> Service</span>
                    </div>
                    </Link>
                    <Link to ="/about">
                    <div className = 'header_option'>
                       
                        <span className='header_optionLineTwo'>About Us</span>
                    </div>
                    </Link>
                    <Link to="/booking">
                    <div className = 'header_option'>
                       
                        <span className='header_optionLineTwo'> Booking</span>
                    </div>
                    </Link>
                    <Link to="/Contact">
                    <div className = 'header_option'>
                       
                        <span className='header_optionLineTwo'> Contact</span>
                    </div>
                    </Link>

                  
                    <Link to='/logout'>
                    <div className = 'header_option'>
                        <span className='header_optionLineTwo'  onClick={logout}>Logout </span>
                    </div>
                    </Link>
                </div>
            
                    
                
        }else {
            var  menu= 
            
                    <div className="header_nav">
                        <Link to ="/register">
                    <div className = 'header_option'>
                            <span className='header_optionLineOne'>Hello Customer</span>
                            <span className='header_optionLineTwo'>Sign In</span>

                        </div>
                        </Link>
                        <Link to="/service">
                    <div className = 'header_option'>
                       
                        <span className='header_optionLineTwo'> Service</span>
                    </div>
                    </Link>
                        <Link to ="/about">
                        <div className = 'header_option'>
                           
                            <span className='header_optionLineTwo'>About Us</span>
                        </div>
                        </Link>
                        </div>
                
            
        }
    
    return(
        <div className='header'>
        <Link to ="/">
        
        </Link>
            <div className ="header_search">
                  
                    </div>
                    {menu}
                    </div>
       
       
    )
    
                    }
}
export default Header;