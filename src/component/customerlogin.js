import React, { Component } from 'react';
import havana from '../images/havana.jpg'
import '../css/customer.css';

import axios from 'axios'
import { Redirect } from 'react-router-dom';

class customerlogin extends Component {
    state = {
        otp : "",
        chklogin : false
    }

    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/verifyotp", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('fullname',response.data.customerData.fullname)
            this.setState({
                chklogin : true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render() {
        if(this.state.chklogin === true){
            //redirect to dashboard
            return <Redirect to ='/' />

        }
        return (
            <div class="container-fluid">
            <div class="row no-gutter">
            {/* <!-- The image half --> */}
            <div className="col-md-1"></div>
            <div class="col-md-5 d-none d-md-flex bg-image"></div>


            {/* <!-- The content half --> */}
            <div class="col-md-5 bg-light">
            <div class="login d-flex align-items-center py-5">

                {/* <!-- Demo content--> */}
                <div class="container">
                    <div class="row">
                        <div class="all col-lg-10 col-xl-7 ">
                            <h3 class="display-4">Customer Login!</h3>
                            <p class="text-muted mb-4">Please enter your OTP to login.</p>
                            <form className="demoform">
                            <div class="group">
                                    {/* <label for="email"> OTP</label> */}
                                    <input type="text" placeholder="OTP...." value={this.state.otp} 
                                        onChange={(event) => { this.setState({ otp: event.target.value }) }}
                                            name="otp" id="otp"required  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <button type="submit" className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm' onClick={this.sendEmail}>Log In</button>
                            
                                <div> <p>" When you go on a road trip the road trip itself becomes part of the story."</p></div>
                            
                            </form>
                        </div>
                    </div>
                </div>
                

            </div>
            </div>
            <div className="col-md-1"></div>

            </div>
            </div>
       
        )
    }
}
export default customerlogin
