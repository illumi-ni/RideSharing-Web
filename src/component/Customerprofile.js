import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import profile from "../images/profile.jpg"

class Customerprofile extends Component{
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
                            <Link to="/">
                                <li> UpcomingRide </li>
                            </Link>
                            <Link to="/">
                                <li> History </li>
                            </Link>
                        </ul>
                    </div>
                    <form className="form1">
                    {/* <img src={profile} class="card-img-top" alt="" style={{width:"200px"}}></img>
                    <button type="button" class="btn btn-primary">Upload Picture</button> */}


                    <div className="container-fluid mt--7" >
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0" style={{ marginLeft: "500px" }}>
                        <div className="card card-profile shadow">
                            
                            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div className="d-flex justify-content-between">
                                    <h3 style={{fontSize:"40px", marginLeft:"30px"}}>My Details</h3>
                                    {/* <Link to ="/editprofile/">
                                        <button>Edit</button>
                                        </Link> */}
                                    
                                </div>
                            </div>
                            <div className="card-body pt-0 pt-md-4">

                                <div className="text-center">
                                                        
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
                                        
                                
                                    
                                        
                                        
                                    
                                    <hr className="my-4"></hr>
                                    <p>Let’s hit the road together</p>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
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