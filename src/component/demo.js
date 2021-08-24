import React, { Component } from 'react';
import '../css/demo.css';
import hire from '../images/hire.jpg';

class demo extends Component {
    render() {
         return (
          
        <div class="container-fluid">
        <div class="row no-gutter">
        {/* img */}
        <div className="col-md-1"></div>
        <div class="col-md-5 d-none d-md-flex bg-image"></div>
         <div class="col-md-5 bg-light">
        <div class="login d-flex align-items-center py-5">

            {/* form */}
            <div class="container">
                <div class="row">
                    <div class="all col-lg-10 col-xl-7 ">
                        <h3 class="display-4">Customer Login!</h3>
                        <p class="text-muted mb-4">Please enter your email to login.</p>
                        <form className="demoform">
                        <div class="form-group">
                  
                                <input type="text" placeholder="Enter your email......" 
                                
                                name="username" id="username" required class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" >Next</button>
                            
                            
                            <div class="text-center d-flex justify-content-between mt-4"><p>Don't have an account??? <a href="/register" class="font-italic text-muted"> 
                                    <u>Register</u></a></p></div>
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
export default demo;