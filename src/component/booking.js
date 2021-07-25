// import { left } from '@popperjs/core';
import React, { Component } from 'react';
import '../css/booking.css';
import axios from 'axios';


class booking extends Component {
    state = {
        fullname : "",
        phone:"",
        from:"",
        to:"",
        dob:"",
        time:"",
      
    }
    
ChangeItems=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
//img handler

SendItems=(e)=>{
    //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
    e.preventDefault();
    const data = new FormData();
    data.append('fullname',this.state.fullname)
    data.append('phone',this.state.phone)
    data.append('from',this.state.from)
    data.append('to',this.state.to)
    data.append('dob',this.state.dob)
    data.append('time',this.state.time)
   

    console.log(data)

    axios.post("http://localhost:90/customer/booking",data)

    
    .then((response)=>{
        console.log(response)
        window.location.reload(true);
    })
    .catch((error)=>{
        console.log(error.response)
    })
}
    render() {
        return (
            <div>
            <section id="hero2">
            <div class="hero2-container" data-aos="fade-up">
                <h1>Welcome to Booking Page</h1>
                <h2></h2>
            
            </div>
            </section> 
        
            <section id="booking" class="booking">
		    <div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="form-header">
							<h1>Make Advanced Booking</h1>
						</div>
						<form>
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Fullname..." />
										<span class="form-label">Fullname</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Phone..."/>
										<span class="form-label">Phone</span>
									</div>
								</div>
							</div>
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="From..."/>
										<span class="form-label">From</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="To..."/>
										<span class="form-label">To</span>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date" placeholder="Date..."/>
										<span class="form-label">Date</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Time..."required/>
										<span class="form-label">Time</span>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Distance..."/>
										<span class="form-label">Distance</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Price"/>
										<span class="form-label">Price</span>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn">Book Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>








            {/* <div className="container-fluid">

                <div className =" make jumbotron text-center">

                <div className="Booking">
                <div className="row">
                    <div className="  col-sm-3"></div>
                    <div className="Booking_container  col-sm-6">
                        
                    <form>
                        <h1>Booking Your Ride</h1>
                        <h4>Complete your plans today by reserving a ride. Request a ride up to 30 days in advance</h4>

                            <h5 for="fullname"><label className="regstyle">Fullname</label>
                                <input type="text" placeholder="Fullname...... " name="fullname"  value={this.state.fullname} onChange={this.ChangeItems}required />

                            </h5>
                           
                            <h5 for="context"><label className="regstyle">Contact</label>
                                <input type="text" placeholder="Contact......." name="phone"   value={this.state.phone} onChange={this.ChangeItems}required />
                            </h5>
                            <h5 for="context"><label className="regstyle">From</label>
                                <input type="text" placeholder="destination......." name="from"  value={this.state.from} onChange={this.ChangeItems} required />
                            </h5>
                            <h5 for="context"><label className="regstyle">To</label>
                                <input type="text" placeholder="destination......." name="to"   value={this.state.to} onChange={this.ChangeItems}required />
                            </h5>
                            <h5 for="context"><label className="regstyle">Date</label>
                                <input type="date" placeholder="Date......." name="dob"   value={this.state.dob} onChange={this.ChangeItems}required />
                            </h5>
                            <h5 for="context"><label className="regstyle">Time</label>
                                <input type="time" placeholder="Time......." name="time"  value={this.state.time} onChange={this.ChangeItems} required />
                            </h5>

                            <button type="submit" className='Book_btn' onClick={this.SendItems}>Book</button>

                       

                        </form>
                    </div>

                    </div>
                 
                </div>
                </div> */}
            {/* </div> */}
            </div>

        )
    }
}

export default booking;