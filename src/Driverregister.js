import React, { Component } from 'react';
import './Driverregister.css';
import hire from './hire.jpg'


class Driverregister extends Component{
    render(){  
    return(
        <div style={{ backgroundImage: `url(${hire})`,backgroundRepeat: 'no-repeat'   }}>
        <div className="drivRegister">
          
          
            <div className ='drivRegister_container'>
               
                <h1>Driver Register</h1>
                <form>
                    
                    <h5 for ="fullname"><label className="regstyle">Fullname</label>
                    <input type="text" placeholder="Fullname...... " name="fullname" id="fullname" required/>
                    </h5>
                    <h5 for="email"><label className="regstyle">Email</label>
                    <input type="text" placeholder="Email........" name="email" id="email"  required/>
                    </h5>
                    <h5 for="citizenship"><label className="regstyle">Citizenship</label>
                    <input type="text" placeholder="Citizenship........" name="citizenship" id="citizenship"  required/>
                    </h5>

                    <h5 for="dob"><label className="regstyle">Driver Licence</label>
                    <button className='choose_btn'>Choose File</button>
                    </h5>

                    <h5 for="dob"><label className="regstyle">DOB</label>
                    <input type="date" placeholder="DOB........" name="dob" id="dob"  required/>
                    </h5>
                    
                     <h5 for="context"><label className="regstyle">Contact</label>
                    <input type="text" placeholder="Contact......." name="contact" id="contact"  required/>
                    </h5>
                    <h5 for="vechiclenum"><label className="regstyle">Vechicle Number</label>
                    <input type="text" placeholder="Vechiclenum......." name="vechiclenum" id="vechiclenum"  required/>
                    </h5>

                    <h5 for="model"><label className="regstyle"> Model</label>
                    <input type="text" placeholder="Model......." name="model" id="model"  required/>
                    </h5>
                    
                    
                    <button type="submit" className='drivRegister_btn'>Register</button>
                    
                    

                </form>

                
            </div>
        </div>
        </div>
        
    
    )
    }
}

export default Driverregister;