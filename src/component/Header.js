import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {

        if (localStorage.getItem('token')) {
            var menu =
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutUs">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookings">Bookings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactUs">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Log out</Link>
                    </li>
                </ul>
        } else {
            var menu =

                <ul className="navbar-nav ms-auto" >
                    <li className="nav-item">
                        <Link className="nav-link custom-font" to="/aboutUs">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
        }

        return (
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="#">Carrentals</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span></button>
                    <div className="navbar-collapse collapse " id="navbarResponsive">
                        {menu}
                    </div>
                </div>
            </nav>

        )

    }
}

export default Header;