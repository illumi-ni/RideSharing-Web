import React, { Component } from 'react';
import './register.css';
import car from './car.jpg'


class register extends Component{
    render(){  
    return(
        <div style={{ backgroundImage: `url(${car})`,backgroundRepeat: 'no-repeat'   }}>
        <div className="Register">
          
          
            <div className ='Register_container'>
               
                <h1>Register</h1>
                <form>
                    
                    <h5 for ="fullname"><label className="regstyle">Fullname</label>
                    <input type="text" placeholder="Fullname...... " name="fullname" id="fullname" required/>
                    </h5>
                    <h5 for="email"><label className="regstyle">Email</label>
                    <input type="text" placeholder="Email........" name="email" id="email"  required/>
                    </h5>
                    <h5 for="gender"><label className="regstyle">Gender</label>
                            <input type="radio" value="Male" name="gender" /> Male
                            <input type="radio" value="Female" name="gender" /> Female
                            <input type="radio" value="Other" name="gender" /> Other
                     </h5> 
                     <h5 for="context"><label className="regstyle">Contact</label>
                    <input type="text" placeholder="Contact......." name="contact" id="contact"  required/>
                    </h5>
                    
                    
                    <button type="submit" className='Register_btn'>Register</button>
                    
                    

                </form>

                
            </div>
        </div>
        </div>
        
    
    )
    }
}

export default register;