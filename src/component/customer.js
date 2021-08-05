import React, { Component } from 'react';
import '../css/customer.css';
import log from "../images/log.jpg";
import axios from 'axios';
import {Redirect } from 'react-router-dom';

class customer extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            chklogin : false
        };
    }

    sendEmail = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email
        }

        axios.post("http://localhost:90/sendotp", data)
            .then(response => {
                // console.log(response.data.success)
                // if(response.data.success == true) {
                //     return <Redirect to ="/customerlogin"/>
                // }
                this.setState({
                    chklogin : true
                })
            })
            .catch(error => {
                console.log(console.error())
            })
    }

    render() {
        if(this.state.chklogin === true){
            //redirect to dashboard
            return <Redirect to ='/customerlogin' />

        }
        return (
    //         <div className="container-fluid">
    //         <div className="CustomerLogin">
                
                
     
      
    //       <div className="log">
                     
    //           <div className="CusLog">
    //           <form  className=" row">
    //             <div className=" col-md-4"></div>
    //             <div className="  col-md-4">
    //                 <div className="CusForm">
    //                 <form>
    //                     <h1>Please Enter your email to login</h1>
    //                 <h5 for="email"><label className="regstyle">Email</label>
    //                        <input type="text" placeholder="Enter your email......" 
    //                          value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
    //                           name="username" id="username" required />
    //                      </h5>
                        
    //                      <button type="submit" className='cusLogin_btn' onClick={this.sendEmail}>Next</button>
    //                  </form>
    //                 </div>
    //             </div>
    //             <div className=" col-md-4"></div>
                
    //           </form>
    //           </div>
    //       </div>
    //   </div>
    //   </div>
     
    <div className="Container-fluid">
        <section id="Customer">
           
           <div className=" row ">
               <div className="cus">
               <div className="col-md-4"></div>
                  

              
               <form className="cusemail">
               <div className="cusform col-md-4">
                        <h1>Customer Login </h1>
                        <h2>Please Enter your email to login</h2>
                        
                        <div class="form-group">
                            <label for="email"> Email</label>
                            <input type="text" placeholder="Enter your email......" 
                              value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                            name="username" id="username" required />
                        </div>
                        <button type="submit" className='cusLogin_btn' onClick={this.sendEmail}>Next</button>
                        </div>     
                </form> 
                <div className="col-md-4"></div> 
                
           </div> 
           </div>
        </section>
    </div>
      
    
      
        )
    }
}
export default customer
