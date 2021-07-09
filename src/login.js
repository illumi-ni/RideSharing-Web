import React, { Component } from 'react';
import './register.css';
import background from "./background.jpg";
import axios from "axios"


class login extends Component {
    state = {
        username : "",
        password : "",
        chklogin : false
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/user/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('username',response.data.data)
            this.setState({
                chklogin : true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat'   }}>
            <div className="Register">
                <div className='Register_container'>
                    <h1>Login</h1>
                    <form>
                        <h5 for="email"><label className="regstyle">Username</label>
                            <input type="text" placeholder="Username" name="username" id="username" required />
                        </h5>
                        <h5 for="password"><label className="regstyle">Password</label>
                            <input type="text" placeholder="Password" name="password" id="password" required />
                        </h5>
                        <button type="submit" className='Login_btn' onClick={this.sendUserData}>Login</button>
                    </form>

                </div>
            </div>
            </div>
        )
    }
}
export default login
