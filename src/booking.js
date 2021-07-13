import React, { Component } from 'react';
import './booking.css';


class booking extends Component {
   

    render() {
        return (
            // <div style={{ backgroundImage: `url(${car})`, backgroundRepeat: 'no-repeat' }}>
                <div className="Register">

                    <div className='Register_container'>
                    <form>
                        <h1>Booking Your Ride</h1>
                        <h5>Complete your plans today by reserving a ride. Request a ride up to 30 days in advance</h5>
                        

                            <h5 for="fullname"><label className="regstyle">Fullname</label>
                                <input type="text" placeholder="Fullname...... " name="fullname"  required />
                            </h5>
                           
                            <h5 for="context"><label className="regstyle">Contact</label>
                                <input type="text" placeholder="Contact......." name="contact"   required />
                            </h5>
                            <h5 for="context"><label className="regstyle">From</label>
                                <input type="text" placeholder="destination......." name="from"   required />
                            </h5>
                            <h5 for="context"><label className="regstyle">To</label>
                                <input type="text" placeholder="destination......." name="to"   required />
                            </h5>
                            <h5 for="context"><label className="regstyle">Date</label>
                                <input type="date" placeholder="Date......." name="date"   required />
                            </h5>
                            <h5 for="context"><label className="regstyle">Time</label>
                                <input type="time" placeholder="Time......." name="time"   required />
                            </h5>
                            <button type="submit" className='Register_btn'>Book</button>
                        </form>
                    </div>
                </div>
        //     </div>
        )
    }
}

export default booking;