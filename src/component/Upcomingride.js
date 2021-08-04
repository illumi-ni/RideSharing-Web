import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import profile from "../images/profile.jpg"

class UpcomingRide extends Component{
    render(){
        return(
            <div>

                    <section id="hero5">
            <div class="hero5-container" data-aos="fade-up">
                <h1>Welcome to Profile</h1>
                <h2></h2>
            
            </div>
            </section>
            <div className="container-fluid">
                 <section id="CustomerProfile">
                
                        <div className="row customerdetail">
                    <div className="col-md-4 "></div>
                    <div className="col-md-4 ">
                        <ul>
                            <Link to="/Customerprofile">
                                <li> Profile </li>
                            </Link>
                            <Link to="/Upcomingride">
                                <li> UpcomingRide </li>
                            </Link>
                            <Link to="/">
                                <li> History </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-md-4 "></div>
                </div>
                </section>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                <div className="update">
                <button className="buttoncan"> Cancle</button>
                <Link to="/BookingUpdate"> <button className="buttonup">Update</button></Link>
                    
                    </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                </div>
        )

    }
}

export default UpcomingRide