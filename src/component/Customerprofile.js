import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import profile from "../images/profile.jpg"

class Customerprofile extends Component{
    render(){
        return(
            <div>

                    <section id="hero1">
            <div class="hero1-container" data-aos="fade-up">
                <h1>Welcome to Contact Page</h1>
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
                            <Link to="/">
                                <li> UpcomingRide </li>
                            </Link>
                            <Link to="/">
                                <li> History </li>
                            </Link>
                        </ul>
                    </div>
                    <form className="form1">
                    <img src={profile} class="card-img-top" alt="" style={{width:"200px"}}></img>
                    <button type="button" class="btn btn-primary">Upload Picture</button>
                    <div className="form2">
                        <div class="form-group">
                            <label for="Fullname">Full Name</label>
                            <input type="Fullname" class="form-control" id="FullName" placeholder="Enter fullName"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
                        </div>
                        <div class="form-group">
                            <label for="Phone">Phone No</label>
                            <input type="Phone" class="form-control" id="Phone" placeholder="Enter Phone No"/>
                        </div>
                        <div class="form-group">
                            <label for="gender">Gender</label>
                            <input type="gender" class="form-control" id="gender" placeholder="Enter Gender"/>
                        </div>
                        <div class="form-group">
                            <label for="gender">Date of Birth</label>
                            <input type="dateofbirth" class="form-control" id="dateofbirth" placeholder="Enter Date of Birth"/>
                        </div>
                        </div>
                        </form>

                </div>
                 </section>
                </div>
                </div>
        )

    }
}

export default Customerprofile