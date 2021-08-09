import React, { Component } from 'react';
import '../css/BookingUpdate.css';
// import { Link } from 'react-router-dom';
// import profile from "../images/profile.jpg"

class BookingUpdate extends Component{
    render(){
        return(
            
            <div className="container-fluid">
                 <section id="bookingupdate">
                     <div className="row">
                     <div className="col-md-3">
                         </div>
                
                    <form className="updatebook ">
                        <h1>Booking Update</h1>

                                <div className="form2 col-md-6">
                        <div class="form-group">
                            <label for="Fullname">Full Name</label>
                            <input type="Fullname" class="form-control" id="FullName" placeholder="Enter fullName"/>
                        </div>
                        <div class="form-group">
                            <label for="Phone">Phone No</label>
                            <input type="Phone" class="form-control" id="Phone" placeholder="Enter Phone No"/>
                        </div>
                        <div class="form-group">
                            <label for="from">From</label>
                            <input type="from" class="form-control" id="from" placeholder="From.."/>
                        </div>
                        <div class="form-group">
                            <label for="to">To</label>
                            <input type="to" class="form-control" id="to" placeholder="To"/>
                        </div>
                        <div class="form-group">
                        
                        <label for="date">Date</label>
                            <input type="date" class="form-control" id="date" />
                        </div>
                        <div class="form-group">
                            <label for="time">Time</label>
                            <input type="time" class="form-control" id="time" placeholder="time"/>
                        </div>
                        <div class="form-group">
                        
                        <label for="distance">Distance</label>
                            <input type="distance" class="form-control" id="distance" placeholder="Distance..." />
                        </div>
                        <div class="form-group">
                            <label for="gender">Price</label>
                            <input type="price" class="form-control" id="price" placeholder="Price"/>
                        </div>
                        <button>Update</button>
                        </div>
                        <div className="col-md-3">
                         </div>
                         
                        </form>
                        </div>
                 </section>
                </div>
              
        )

    }
}

export default BookingUpdate