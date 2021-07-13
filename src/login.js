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
        axios.post("http://localhost:90/admin/login", this.state)
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
                <form>
                    <h1>Login</h1>
                    
                        <h5 for="email"><label className="regstyle">Username</label>
                            <input type="text" placeholder="Username" name="username" id="username" value={this.state.username} onChange={this.changeHandler}required />
                        </h5>
                        <h5 for="password"><label className="regstyle">Password</label>
                            <input type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.changeHandler}required />
                        </h5>
                        <button type="submit" className='Login_btn' onClick={this.submitLogin}>Login</button>
                    </form>

                </div>
                <div class="overlay-container log-in-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>HTML CSS Login Form</h1>
					<p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
				</div>
			</div>
		</div>
	</div> 
            </div>
            


/* <div class="container" id="container/ register">
		<div class="form-container log-in-container/ register container">
			<form action="#">
				<h1>Login</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<a href="#">Forgot your password?</a>
				<button>Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>HTML CSS Login Form</h1>
					<p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
				</div>
			</div>
		</div>
	</div> */
        )
    }
}
export default login
