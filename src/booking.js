// import { left } from '@popperjs/core';
import React, { Component } from 'react';
import './booking.css';
// import car from './car.jpg'


class booking extends Component {
    render() {
        return (
            // <div style={{ backgroundImage: `url(${car})`, backgroundRepeat: 'no-repeat' }}>
            <div className="container-fluid">
                <div className ="jumbotron text-center">
                    {/* <div style={{ backgroundImage: `url(${car})`, backgroundRepeat: 'no-repeat' }}></div>
                            {/* <h1>My First Bootstrap Page</h1>
                            <p>Resize this responsive page to see the effect!</p> */}
                    <img src='./hire.jpg' alt='car' className='img-fluid' style={{width:"100%"}}/>
                </div>
                
                <div className=" jumbotron booking">
                    <div className="row">
                        <h1>What Services we provide to our customers</h1>
                        <div className="book col-sm-4">
                            <h3 >Taxi Service </h3>
                            <p >We provide taxi service where you can share you taxi with your friends, family .</p>
                        </div>
                        <div className="book col-sm-4">

                            <h3>Office Pick-up </h3>
                            <p>We provide office pick-up service where you can share you taxi with your co-workers </p>
                        </div>
                        <div className="book col-sm-4">
                            <h3>Advance Services</h3>
                            <p>we provide advance booking service for our customers for 30 days </p>
                        </div>
                    </div>
                 </div>
                <div className="Booking">
                <div className="row">
                    <div className="  col-sm-3"></div>
                    <div className="Booking_container  col-sm-6">
                    <form>
                        <h1>Booking Your Ride</h1>
                        <h4>Complete your plans today by reserving a ride. Request a ride up to 30 days in advance</h4>
                        

                            <h5 for="fullname"><label className="regstyle ">Fullname</label>
                                <input type="text"  placeholder="Fullname...... " name="fullname"  required />
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
                            <button type="submit" className='Book_btn'>Book</button>
                        </form>
                    </div>

                    </div>
                    <div className=" col-sm-3"></div>
                </div>
            </div>

        )
    }
}

export default booking;