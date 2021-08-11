import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactRoundedImage from "react-rounded-image";
import Update from "@material-ui/icons/Update";

import {  } from 'react-icons/fa';

class Customerprofile extends Component {
    state = {
        fullname: "",
        email: "",
        phone: "",
        gender: "",
        photo: "",
        id: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    // fileHandler = (e) => {
    //     this.setState({
    //         photo: e.target.files[0]
    //     })
    // }

    changeHandler = (e) => {
        //type gareko value store gardai jancha     
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        console.log(this.state.id)

        axios.get("http://localhost:90/customer/single", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    id: response.data.customerData._id,
                    fullname: response.data.customerData.fullname,
                    email: response.data.customerData.email,
                    gender: response.data.customerData.gender,
                    phone: response.data.customerData.contact,
                    // photo: response.data.data.photo,



                })
                // console.log(data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

   
    render() {
        return (
            <div>
                 <section id="hero5">
                 <div className="hero5-container" data-aos="fade-up">
                     <h1>Welcome to Profile</h1>
                         <h2></h2>

                     </div>
                 </section>
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
                                     <Link to="/History">
                                     <li> History </li>
                                     </Link>
                                 </ul>
                            </div>
                            </div>
                            
            
            <div className="page-content page-container" id="page-content">
               
        <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                            <div className="text-center">
                                                         <img src={"http://localhost:90/" + this.state.photo} style={{width:"150px",height:"150px", background:"white", borderRadius:"50%"}}/>
                                                          <button ><Update/></button>
                                 
                                           </div>            
                                <h6 className="f-w-600" >{localStorage.getItem('fullname')}</h6>
                                
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="m-b-10 f-w-600">Fullname</p>
                                        <input type="Fullname" className="form-control" name="fullname" placeholder="Enter fullName" value={this.state.fullname} onChange={this.changeHandler} />
                                    </div>
                                    <div className="col-sm-12">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.changeHandler} />
                                    </div>
                                    <div className="col-sm-12">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <input type="Phone" className="form-control" name="phone" placeholder="Enter Phone No" value={this.state.phone} onChange={this.changeHandler} />
                                    </div>
                                    <div className="col-sm-12">
                                        <p className="m-b-10 f-w-600">Gender</p>
                                        <input type="gender" className="form-control" name="gender" placeholder="Enter Gender" value={this.state.gender} onChange={this.changeHandler} />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>








            // <div>

            //     <section id="hero5">
            //         <div className="hero5-container" data-aos="fade-up">
            //             <h1>Welcome to Profile</h1>
            //             <h2></h2>

            //         </div>
            //     </section>
            //     <div className="container-fluid">
            //         <section id="CustomerProfile">

            //             <div className="row customerdetail">
            //                 <div className="col-md-4 "></div>
            //                 <div className="col-md-4 ">
            //                     <ul>
            //                         <Link to="/Customerprofile">
            //                             <li> Profile </li>
            //                         </Link>
            //                         <Link to="/Upcomingride">
            //                             <li> UpcomingRide </li>
            //                         </Link>
            //                         <Link to="/History">
            //                             <li> History </li>
            //                         </Link>
            //                     </ul>
            //                 </div>
            //                 <form className="form1">
                             


            //                     <div className="container-fluid mt--7" >
            //                         <div className="row">
            //                             <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0" style={{ marginLeft: "500px" }}>
            //                                 <div className="card card-profile shadow">

            //                                     <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            //                                         <div className="d-flex justify-content-between">
            //                                             <h3 style={{ fontSize: "40px", marginLeft: "30px" }}>My Details</h3>
                                                   

            //                                         </div>
            //                                     </div>
            //                                     <div className="card-body pt-0 pt-md-4">

            //                                         <div className="text-center">
            //                                             <ReactRoundedImage image={"http://localhost:90/" + this.state.photo} />
            //                                             <button type="button" className="btn btn-primary">Upload Picture</button>


            //                                             <div className="form2">
            //                                                 <div className="form-group">
            //                                                     <label for="Fullname">Full Name</label>
            //                                                     <input type="Fullname" className="form-control" name="fullname" placeholder="Enter fullName" value={this.state.fullname} onChange={this.changeHandler} />
            //                                                 </div>
            //                                                 <div className="form-group">
            //                                                     <label for="email">Email</label>
            //                                                     <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.changeHandler} />
            //                                                 </div>
            //                                                 <div className="form-group">
            //                                                     <label for="Phone">Phone No</label>
            //                                                     <input type="Phone" className="form-control" name="phone" placeholder="Enter Phone No" value={this.state.phone} onChange={this.changeHandler} />
            //                                                 </div>
            //                                                 <div className="form-group">
            //                                                     <label for="gender">Gender</label>
            //                                                     <input type="gender" className="form-control" name="gender" placeholder="Enter Gender" value={this.state.gender} onChange={this.changeHandler} />
            //                                                 </div>
            //                                             </div>


            //                                             <hr className="my-4"></hr>
            //                                             <p>Let’s hit the road together</p>


            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>

            //                 </form>

            //             </div>
            //         </section>
            //     </div>
            // </div>
        )

    }
}

export default Customerprofile