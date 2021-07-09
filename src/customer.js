import React, { Component } from 'react';
import './register.css';
import bryte from "./bryte.jpg";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
            <div style={{ backgroundImage: `url(${bryte})`,backgroundRepeat: 'no-repeat'   }}>
            <div className="Register">
                <div className='Register_container'>
                    <h1>Customer Login</h1>
                    <form>
                        <h5 for="email"><label className="regstyle">Email</label>
                            <input type="text" placeholder="Please enter your email" 
                            value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                             name="username" id="username" required />
                        </h5>
                        
                        <button type="submit" className='Login_btn' onClick={this.sendEmail}>Next</button>
                    </form>

                </div>
            </div>
             </div>
        )
    }
}
export default customer
