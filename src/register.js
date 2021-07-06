import React, { Component } from 'react';
import './register.css';


class register extends Component{
    render(){  
    return(
        <div className="Register">
          
          
            <div className ='Register_container'>
               
                <h1>Register</h1>
                <form>
                    <h5 for ="fullname"><label className="regstyle">Fullname</label>
                    <input type="text" placeholder="Fullname......" name="fullname" id="fullname" required/>
                    </h5>
                    <h5 for ="username"><label className="regstyle">Username</label>
                    <input type="text" placeholder="Username...... " name="username" id="username" required/>
                    </h5>
                    <h5 for="address"><label className="regstyle">Address</label>
                    <input type="text" placeholder="Address...... " name="address" id="address"  required/>
                    </h5>
                     <h5 for="context"><label className="regstyle">Contact</label>
                    <input type="text" placeholder="Contact......." name="contact" id="contact"  required/>
                    </h5>
                    <h5 for="email"><label className="regstyle">Email</label>
                    <input type="text" placeholder="Email........" name="email" id="email"  required/>
                    </h5>
                    <h5 for="password"><label className="regstyle">Password</label>
                    <input type="text" placeholder="Password......" name="password" id="password"  required/>
                    </h5>
                    <button type="submit" className='Register_btn' onClick={this.sendUserData}>Register</button>

                    

                </form>
                
            </div>
        </div>
        
    
    )
    }
}

export default register;