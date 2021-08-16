import React, { Component } from 'react';
import '../css/Customerprofile.css';
import { Link } from 'react-router-dom';
import profile from "../images/profile.jpg"
import Delete from "@material-ui/icons/Delete"
import Update from "@material-ui/icons/Update"
import Date from "@material-ui/icons/DateRange"
import Time from "@material-ui/icons/Timer"
import From from "@material-ui/icons/TimeToLeave"
import To from"@material-ui/icons/TimelapseRounded"
import axios from "axios"

class UpcomingRide extends Component{
    state={
        fullname: "",
        phone: "",
        from: "",
        to: "",
        date: "",
        time:"",
        distance:"",
        price:"",
        id:""
    }
    //page load huni bitikai load huni function
    componentDidMount(){
        const fullname = localStorage.getItem('fullname')
    
            axios.get('http://localhost:90/booking/single/'+fullname)
            .then((response)=>{
              
                this.setState({
                    id:response.data.BookingData._id,
                    fullname: response.data.BookingData.fullname,
                    phone: response.data.BookingData.phone,
                    from: response.data.BookingData.from,
                    to: response.data.BookingData.to,
                    date: response.data.BookingData.date,
                    time: response.data.BookingData.time,
                    distance: response.data.BookingData.distance,
                    price: response.data.BookingData.price,
                    
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }

  
        DeleteRide=(fullname)=>{
            axios.delete("http://localhost:90/delete/booking/"+ fullname)
            .then((response)=>{
                alert(response.data.message)
                window.location.reload(true);
            })
            .catch((error)=>{
                console.log(error.response)
            })
            }
    
    render(){
        return(
            <div>

                    <section id="hero5">
            <div class="hero5-container" data-aos="fade-up">
                <h1>Welcome to Profile</h1>
                <h2></h2>
            
            </div>
            </section>
            <div className="container-fluid">
                 <section id="CustomerProfile">
                
                        <div className="row customerdetail">
                    <div className="col-md-4 "></div>
                    <div className="col-md-4 ">
                        <ul>
                            <Link to="/Customerprofile">
                                <li> Profile </li>
                            </Link>
                            <Link to="/Upcomingride">
                                <li> UpcomingRide </li>
                            </Link>
                            <Link to="/History">
                                <li> History </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-md-4 "></div>
                </div>
                </section>
                </div>

                <div className="row">
             
                        <div className="update">
                        <h6><Date/>{this.state.date} <Time/>{this.state.time}</h6>
                            <h4> {this.state.fullname}</h4>

                                <h5><From/> {this.state.from}</h5>
                                <h5><To/>  {this.state.to}</h5>
                        <button className="buttoncan"><Delete/> </button>
                        <Link to="/BookingUpdate"> <button className="buttonup"><Update/></button></Link>
                            </div>
                          
                                
                                 
                                   
                
                    </div>
                
                </div>
        )

    }
}  

export default UpcomingRide