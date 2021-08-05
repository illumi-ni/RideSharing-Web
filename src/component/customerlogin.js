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
        //     <div className="CustomerLogin1">
        //        <img src='./log.jpg' alt='log' className='img-fluid'/>
        //     <div className="container-fluid">
                
        //     {/* <div className="img-fluid" style={{ backgroundImage: `url(${havana})`,backgroundRepeat: 'no-repeat', width:'100%'  }} > */}
                
        //     <div className="log">
        //         <div className="CusLog">
        //         <div className=" row">
        //           <div className=" col-sm-4"></div>
        //           <div className="  col-sm-4">
        //               <div className="CusForm">
        //               <h1>Customer Login</h1>
        //             <form>
        //                  <h5> Please enter the OTP that we have send in your mobile number. </h5>
                        
        //              <h5 for="password"><label className="regstyle">OTP</label>
        //                      <input type="text" placeholder="OTP...." value={this.state.otp} 
        //                      onChange={(event) => { this.setState({ otp: event.target.value }) }}
        //                       name="otp" id="otp"required />
        //                  </h5>
        //                  <button type="submit" className='cusLogin_btn' onClick={this.submitLogin}>Login</button>
        //              </form>
        //               </div>
        //           </div>
        //           <div className=" col-sm-4"></div>
        //         </div>
        //       </div>
        //     </div>
        // </div>
        // </div>
        
         
    <div className="Container-fluid">
    <section id="Customer">
       
       <div className=" row ">
           <div className="cus">
           <div className="col-md-4"></div>
              

          
           <form className="cusotp">
           <div className="cusotpform col-md-4">
                    <h1>Customer Login </h1>
                    <h2>Please Enter your OTP</h2>
                    
                    <div class="group">
                        <label for="email"> OTP</label>
                        <input type="text" placeholder="OTP...." value={this.state.otp} 
                             onChange={(event) => { this.setState({ otp: event.target.value }) }}
                               name="otp" id="otp"required />
                    </div>
                    <button type="submit" className='cusLogin_btn' onClick={this.sendEmail}>Log In</button>
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
export default customerlogin
