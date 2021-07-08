import React, { Component } from 'react';
import './register.css';
import car from './car.jpg'
import axios from 'axios';

class register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            contact: "",
            email: "",
            gender: "",
            chkregister: false
        };
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(event) {
        this.setState({
            gender: event.target.value
        });
    }

    sendUserData = (e) => {
        e.preventDefault()
        const data = {
            fullname: this.state.fullname,
            contact: this.state.contact,
            email: this.state.email,
            gender: this.state.gender
        }
        axios.post("http://localhost:90/customer/insert", data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(console.error())
            })
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${car})`, backgroundRepeat: 'no-repeat' }}>
                <div className="Register">

                    <div className='Register_container'>

                        <h1>Register</h1>
                        <form>

                            <h5 for="fullname"><label className="regstyle">Fullname</label>
                                <input type="text" placeholder="Fullname...... " name="fullname" id="fullname" value={this.state.fullname} onChange={(event) => { this.setState({ fullname: event.target.value }) }} required />
                            </h5>
                            <h5 for="email"><label className="regstyle">Email</label>
                                <input type="text" placeholder="Email........" name="email" id="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} required />
                            </h5>
                            <h5 for="gender"><label className="regstyle">Gender</label>
                                <input type="radio" value="Male" name="gender" checked={this.state.gender === "Male"}
                                    onChange={this.onValueChange} /> Male
                                <input type="radio" value="Female" name="gender" checked={this.state.gender === "Female"}
                                    onChange={this.onValueChange} /> Female
                                <input type="radio" value="Other" name="gender" checked={this.state.gender === "Other"}
                                    onChange={this.onValueChange} /> Other

                            </h5>
                            <h5 for="context"><label className="regstyle">Contact</label>
                                <input type="text" placeholder="Contact......." name="contact" id="contact" value={this.state.contact} onChange={(event) => { this.setState({ contact: event.target.value }) }} required />
                            </h5>
                            <button type="submit" className='Register_btn' onClick={this.sendUserData}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default register;