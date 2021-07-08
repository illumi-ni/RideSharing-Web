import React, { Component } from 'react';
import './register.css';
import carrent from "./carrent.jpg"

class customerlogin extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${carrent})`,backgroundRepeat: 'no-repeat'   }}>
            <div className="Register">
                <div className='Register_container'>
                    <h1>Customer Login</h1>
                    <form>
                        <h5> Please enter the OTP that we have send in your mobile number. </h5>
                        
                        <h5 for="password"><label className="regstyle">OTP</label>
                            <input type="text" placeholder="OTP...." name="password" id="otp" required />
                        </h5>
                        <button type="submit" className='Login_btn' onClick={this.sendUserData}>Login</button>
                    </form>

                </div>
            </div>
            </div>
        )
    }
}
export default customerlogin
