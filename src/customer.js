import React, { Component } from 'react';
import './register.css';
import bryte from "./bryte.jpg"



class customer extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${bryte})`,backgroundRepeat: 'no-repeat'   }}>
            <div className="Register">
                <div className='Register_container'>
                    <h1>Customer Login</h1>
                    <form>
                        <h5 for="email"><label className="regstyle">Email</label>
                            <input type="text" placeholder="Please enter your email" name="username" id="username" required />
                        </h5>
                        
                        <button type="submit" className='Login_btn' onClick={this.sendUserData}>Next</button>
                    </form>

                </div>
            </div>
             </div>
        )
    }
}
export default customer
