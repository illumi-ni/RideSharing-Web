import { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    render() {
        const logout = ()=>{
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            window.location.href = '/'
         
        }

        if (localStorage.getItem('token')) {
            var menu =
                <ul >
                    
                    <Link  to="/">
                        <li >Welcome {localStorage.getItem('email')} </li>
                    </Link>

                    <Link  to="/about">
                        <li >About Us </li>
                    </Link>
                    <Link  to="/service">
                            <li >Services </li>
                     </Link>

                    <Link  to="/booking">
                        <li >Booking </li>
                    </Link>
                    <Link  to="/contact">
                        <li >Contact Us </li>
                    </Link>
                    <Link  to="/logout">
                        <li onClick={logout}>Log out </li>
                    </Link>
                   
                </ul>
        } else {
            var menu =

                <ul  >
                     <Link to ="/about">
                    <li  >About</li> 
                    </Link>
                    <Link  to="/service">
                            <li >Services </li>
                     </Link>
                    <Link to ="/register">
                    <li>Register</li> 
                    </Link>
                    <Link to ="/customer">
                    <li>Login</li> 
                    </Link>
                    
                </ul>
        }

        return (
           
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            //     <div className="container">
            //         <Link className="navbar-brand" to="#">Carrentals</Link>

            <div className='header'>
             <header id="header" className="fixed-top d-flex align-items-center">
             <div className="container d-flex align-items-center justify-content-between">
                    <Link to="/">
                    <div className="logo" >
                        <h1 >Ride Sharing</h1>
                    </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span></button>
                    <nav id="navbar" className="navbar" >
                        {menu}
                    </nav>
                </div>
                </header>
                </div>
            

        )

    }
}

export default Header;