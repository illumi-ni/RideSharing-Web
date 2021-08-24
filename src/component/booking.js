// import { left } from '@popperjs/core';
import React, { useState, Component } from 'react';
import '../css/booking.css';
import axios from 'axios';
// import DatePicker from "react-datepicker"
// import $ from 'jquery'; 

class booking extends Component {
    state = {
        fullname : localStorage.getItem('fullname'),
        from:"",
        to:"",
        date:"",
        time:"",
        distance:"",
        price:"1"
      
    }
    
ChangeItem=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}


//img handler
calculatePrice() {
	const price_per_km = this.state.distance;
	const count = 40;
	const total_price = parseInt(price_per_km * count);
	// console.log(total_price)
	return total_price
}

// disable past dates

	
   


SendItems=(e)=>{
    //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
    e.preventDefault();
	var price1=0;
	 price1 = this.calculatePrice()
        this.state.price = price1
        console.log(this.state.price)

		const data = {
            fullname: this.state.fullname,
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            time: this.state.time,
            distance: this.state.distance,
            price: this.state.price
         
        }

    axios.post("http://localhost:90/customer/booking",data, this.state.config)
    .then((response)=>{
        console.log(response)
		alert(response.data.message)
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
										<label style={{color:"white"}}>Pick Up</label>
									<select name="from" class="form-control"type="select" placeholder="from..." id="from" value={this.state.from} onChange={this.ChangeItem}>
                                        <option  disabled="" selected="">Dillibazar</option>
                                        <option >Pashupatinath</option>
                                        <option >Boudha</option>
                                        <option >Swayambhunath</option>
                                        <option >Thamel</option>
                                        <option >Kapan</option>
                                        <option >Patan</option>
                                        <option >Lokanthali</option>
                                        <option >Putalisadak</option>
                                        <option >Suryabhinayak</option>
                                        <option >Kupandole</option>
										<option >Samakhushi</option>
                                        <option >Tokha</option>
                                        <option >Koteshwor</option>
                                        <option >Jadibuti</option>
                                        <option >New Baneshwor</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sadobato</option>
										<option >Maitighar</option>
                                        <option >Tripureshwor</option>
                                        <option >Sundhara</option>
                                        <option >Maitidevi</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sinamangal</option>
										<option >Gausala</option>
                                        <option >Chabahil</option>
                                        <option >Tinkune</option>
                                        <option >Kausaltar</option>
										<option>Gatthaghar</option>
										<option >Thimi</option>
										<option>Balkumari</option>
										<option >Gwarko</option>
                                        <option >Ekantakuna</option>
                                        <option >Jamel</option>
                                        <option >Dhobighat</option>
										<option>Jawalakhel</option>
										<option >Lagankhel</option>
										<option>Pulchowk</option>
                                    </select>
									</div>
									</div>
							
								<div class="col-md-6">
								<div class="form-group">
										<label style={{color:"white"}}>Drop Up</label>
									<select name="to" class="form-control" type="select" placeholder="to..." id="to" value={this.state.to} onChange={this.ChangeItem}>
                                        <option  disabled="" selected="">Lokanthali</option>
                                        <option >Pashupatinath</option>
                                        <option >Boudha</option>
                                        <option >Swayambhunath</option>
                                        <option >Thamel</option>
                                        <option >Kapan</option>
                                        <option >Patan</option>
                                        <option >Dillibazar</option>
                                        <option >Putalisadak</option>
                                        <option >Suryabhinayak</option>
                                        <option >Kupandole</option>
										<option >Samakhushi</option>
                                        <option >Tokha</option>
                                        <option >Koteshwor</option>
                                        <option >Jadibuti</option>
                                        <option >New Baneshwor</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sadobato</option>
										<option >Maitighar</option>
                                        <option >Tripureshwor</option>
                                        <option >Sundhara</option>
                                        <option >Maitidevi</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sinamangal</option>
										<option >Gausala</option>
                                        <option >Chabahil</option>
                                        <option >Tinkune</option>
                                        <option >Kausaltar</option>
										<option>Gatthaghar</option>
										<option >Thimi</option>
										<option>Balkumari</option>
										<option >Gwarko</option>
                                        <option >Ekantakuna</option>
                                        <option >Jamel</option>
                                        <option >Dhobighat</option>
										<option>Jawalakhel</option>
										<option >Lagankhel</option>
										<option>Pulchowk</option>
                                    </select>
									</div>
								</div>
							</div>

						

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
									<label style={{color:"white"}} >Date</label>
										<input class="form-control" type="date" placeholder="Date..." name="date"  value={this.state.date} onChange={this.ChangeItem} required/>
										
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
									<label style={{color:"white"}}>PickUp Time</label> 
									
							<input class="form-control"type="time" id="time" name="time" min="09:00" max="18:00" value={this.state.time} onChange={this.ChangeItem} required/>
									{/* <input class="form-control" type="time"  min="09:00" max="18:00" value={this.state.time} onChange={this.ChangeItem} required/> */}
                                    {/* <select name="pickUpTime" className="form-control" id="select" value={this.state.time} onChange={this.ChangeItem}>
                                        <option  disabled="" selected="">6:00 AM</option>
                                        <option >7:00 AM</option>
                                        <option >8:00 AM</option>
                                        <option >9:00 AM</option>
                                        <option >10:00 AM</option>
                                        <option >11:00 AM</option>
                                        <option >12:00 AM</option>
                                    </select> */}
									</div>
									</div>
								
							</div>
							
							<div class="row">
								<div class="col-md-6" style={{marginRight:"150px"}}>
									<div class="form-group">
									<label style={{color:"white"}}>Distance</label>
										<input class="form-control" type="text" placeholder="Distance..." name="distance" value={this.state.distance} onChange={this.ChangeItem} required/>
										
									</div>
								</div>
								{/* <div class="col-md-6">
									<div class="form-group">
									<label style={{color:"white"}}>Price</label>
										<input class="form-control" type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.ChangeItem} required/>
										
									</div>
								</div> */}
							</div>
							<div class="form-btn">
								<button class="submit-btn" onClick={this.SendItems}>Book Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>






            </div>

        )
    }
}

export default booking;