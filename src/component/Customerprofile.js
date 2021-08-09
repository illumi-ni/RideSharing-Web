import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactRoundedImage from "react-rounded-image";

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

    // updateUserData = (e) => {
    //     e.preventDefault()

    //     const data = new FormData()
    //     data.append('id', this.state.id)
    //     data.append('photo', this.state.photo)
    //     data.append('fullname', this.state.fullname)
    //     data.append('email', this.state.email)
    //     data.append('gender', this.state.gender)
    //     data.append('phone', this.state.phone)



    //     console.log(data)

    //     axios.put("http://localhost:90/customer/update", data, this.state.config)
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })
    // }
    render() {
        return (
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
                                    <Link to="/History">
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
                                                        <h3 style={{ fontSize: "40px", marginLeft: "30px" }}>My Details</h3>
                                                        {/* <Link to ="/editprofile/">
                                        <button>Edit</button>
                                        </Link> */}

                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 pt-md-4">

                                                    <div className="text-center">
                                                        <ReactRoundedImage image={"http://localhost:90/" + this.state.photo} />
                                                        <button type="button" class="btn btn-primary">Upload Picture</button>


                                                        <div className="form2">
                                                            <div class="form-group">
                                                                <label for="Fullname">Full Name</label>
                                                                <input type="Fullname" class="form-control" name="fullname" placeholder="Enter fullName" value={this.state.fullname} onChange={this.changeHandler} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="email">Email</label>
                                                                <input type="email" class="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.changeHandler} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="Phone">Phone No</label>
                                                                <input type="Phone" class="form-control" name="phone" placeholder="Enter Phone No" value={this.state.phone} onChange={this.changeHandler} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="gender">Gender</label>
                                                                <input type="gender" class="form-control" name="gender" placeholder="Enter Gender" value={this.state.gender} onChange={this.changeHandler} />
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