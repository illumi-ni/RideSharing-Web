import React, { Component } from 'react';
import '../css/Driverregister.css';
import hire from '../images/hire.jpg';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


class Driverregister extends Component{
        state = {
            fullname : "",
            email : "",
            username:"",
            phone:"",
            citizenship:"",
            licence:"",
            dob:"",
            vechileNo:"",
            model:"",
        }
        
    ChangeItems=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    //img handler
    
    fileHandler = (e)=>{
        this.setState({
            licence : e.target.files[0]
        })
    }
    
    SendItems=(e)=>{
        //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
        e.preventDefault();
        const data = new FormData();
        data.append('fullname',this.state.fullname)
        data.append('email',this.state.email)
        data.append('username',this.state.username)
        data.append('phone',this.state.phone)
        data.append('citizenship',this.state.citizenship)
        data.append('licence',this.state.licence)
        data.append('dob',this.state.dob)
        data.append('vechileNo',this.state.vechileNo)
        data.append('model',this.state.model)
    
        console.log(data)
    
        axios.post("http://localhost:90/admin/register",data)
    
        
        .then((response)=>{
            console.log(response)
            window.location.reload(true);
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    
    render(){  
    return(
//         <div className="container-fluid">
//         <div style={{ backgroundImage: `url(${hire})`,backgroundRepeat: 'no-repeat'   }}>
//         <div className="drivRegister">
          
          
//             <div className ='drivRegister_container'>
//                 <div className="row">
//                 {/* <div className=" col-sm-3"></div> */}
//                 <div className=" col-sm-6">
               
//                 <h1>Driver Register</h1>
//                 <form>
                    
//                     <h5 for ="fullname">
//                     <input type="text" placeholder="Fullname...... " name="fullname" id="fullname"value={this.state.fullname} onChange={this.ChangeItems}required/>
//                     </h5>
//                     <h5 for="email">
//                     <input type="text" placeholder="Email........" name="email" id="email" value={this.state.email} onChange={this.ChangeItems}required/>
//                     </h5>
//                     <h5 for="username"><label className="regstyle">Username</label>
//                     <input type="text" placeholder="username........" name="username" id="username" value={this.state.username} onChange={this.ChangeItems}required/>
//                     </h5>
//                     <h5 for="context"><label className="regstyle">Contact</label>
//                     <input type="text" placeholder="Contact......." name="phone" id="phone" value={this.state.phone} onChange={this.ChangeItems}required/>
//                     </h5>
//                     <h5 for="citizenship"><label className="regstyle">Citizenship</label>
//                     <input type="text" placeholder="Citizenship........" name="citizenship" id="citizenship" value={this.state.citizenship} onChange={this.ChangeItems}required/>
//                     </h5>

//                     <div className="mb-3">
//                             <Form.File id="formcheck-api-regular">
//                             <p> <b><u>Licence</u></b></p>
//                             <input type ="file" name="licence"  onChange={this.fileHandler}/> 
//                             </Form.File>
//                     </div>

//                     <h5 for="dob"><label className="regstyle">DOB</label>
//                     <input type="date" placeholder="DOB........" name="dob" id="dob" value={this.state.dob} onChange={this.ChangeItems}required/>
//                     </h5>
                    
                     
//                     <h5 for="vechileNo"><label className="regstyle">Vechicle Number</label>
//                     <input type="text" placeholder="vechileNo......." name="vechileNo" id="vechileNo" value={this.state.vechileNo} onChange={this.ChangeItems}required/>
//                     </h5>

//                     <h5 for="model"><label className="regstyle"> Model</label>
//                     <input type="text" placeholder="Model......." name="model" id="model" value={this.state.model} onChange={this.ChangeItems}required/>
//                     </h5>
                    
                    
//                     <button type="submit" className='drivRegister_btn'onClick={this.SendItems}>Register</button>
                    
                    

//                 </form>
//                 </div>
//                 <div className=" col-sm-6"></div>
// </div>
                
//             </div>
//         </div>
//         </div>
//         </div>>
<div className="Driver">
{/* <img src='./log.jpg' alt='log' className='img-fluid'/> */}
<div style={{ backgroundImage: `url(${hire})`,backgroundRepeat: 'no-repeat'   }}></div>
<div className="container-fluid">
<div class="wrapper">
       <div id="particles-js"></div>
        <div class="icon-area"><span><i class="fa fa-users"></i></span></div>
        
        <div class="login-area">
        {/* <h1>Driver Register</h1>
        <h5 for ="fullname">
                   <input type="text" placeholder="Fullname...... " name="fullname" id="fullname"value={this.state.fullname} onChange={this.ChangeItems}required/>
                     </h5>
                     <h5 for="email">
                   <input type="text" placeholder="Email........" name="email" id="email" value={this.state.email} onChange={this.ChangeItems}required/>
                    </h5>
                   <h5 for="username">
                     <input type="text" placeholder="username........" name="username" id="username" value={this.state.username} onChange={this.ChangeItems}required/>
                     </h5>
                     <h5 for="context">
                     <input type="text" placeholder="Contact......." name="phone" id="phone" value={this.state.phone} onChange={this.ChangeItems}required/>
                    </h5>
                    <h5 for="citizenship">
                     <input type="text" placeholder="Citizenship........" name="citizenship" id="citizenship" value={this.state.citizenship} onChange={this.ChangeItems}required/>
                     </h5>

                     <div className="mb-3">
                             <Form.File id="formcheck-api-regular">
                             <p> <b><u>Licence</u></b></p>
                             <input type ="file" name="licence"  onChange={this.fileHandler}/> 
                             </Form.File>
                     </div>

                     <h5 for="dob">
                     <input type="date" placeholder="DOB........" name="dob" id="dob" value={this.state.dob} onChange={this.ChangeItems}required/>
                     </h5>
                    
                     
                   <h5 for="vechileNo">
                    <input type="text" placeholder="vechileNo......." name="vechileNo" id="vechileNo" value={this.state.vechileNo} onChange={this.ChangeItems}required/>
                     </h5>

                     <h5 for="model">
                     <input type="text" placeholder="Model......." name="model" id="model" value={this.state.model} onChange={this.ChangeItems}required/>
                     </h5>
                    
                    
                    <button type="submit" className='drivRegister_btn'onClick={this.SendItems}>Register</button> */}

<div class="row">
                <h1>Driver Register</h1>
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for ="fullname">
                   <input type="text" placeholder="Fullname...... " name="fullname" id="fullname"value={this.state.fullname} onChange={this.ChangeItems}required/>
                     </h5>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for="email">
                   <input type="text" placeholder="Email........" name="email" id="email" value={this.state.email} onChange={this.ChangeItems}required/>
                    </h5>
									</div>
								</div>
							</div>
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for="username">
                     <input type="text" placeholder="username........" name="username" id="username" value={this.state.username} onChange={this.ChangeItems}required/>
                     </h5>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for="context">
                     <input type="text" placeholder="Contact......." name="phone" id="phone" value={this.state.phone} onChange={this.ChangeItems}required/>
                    </h5>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for="citizenship">
                     <input type="text" placeholder="Citizenship........" name="citizenship" id="citizenship" value={this.state.citizenship} onChange={this.ChangeItems}required/>
                     </h5>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
                                    <Form.File id="formcheck-api-regular">
                             <p> <b><u>Licence</u></b></p>
                             <input type ="file" name="licence"  onChange={this.fileHandler}/> 
                             </Form.File>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for="dob">
                     <input type="date" placeholder="DOB........" name="dob" id="dob" value={this.state.dob} onChange={this.ChangeItems}required/>
                     </h5>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
									<h5 for="vechileNo">
                    <input type="text" placeholder="vechileNo......." name="vechileNo" id="vechileNo" value={this.state.vechileNo} onChange={this.ChangeItems}required/>
                     </h5>
									</div>
								</div>
							</div>
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
                                    <h5 for="model">
                     <input type="text" placeholder="Model......." name="model" id="model" value={this.state.model} onChange={this.ChangeItems}required/>
                     </h5>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
									
									</div>
								</div>
							</div>

                            
							<div class="form-btn">
                            <button type="submit" className='drivRegister_btn'onClick={this.SendItems}>Register</button>
							</div>
        </div>
        </div>
        </div>
    </div>
   
    
/* <div class="limiter">
		<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Account Login
				</span>
				<form class="login100-form validate-form p-b-33 p-t-5">

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text" name="username" placeholder="User name"/>
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div> */


        // <div className="CustomerLogin1">
        //        <img src='./log.jpg' alt='log' className='img-fluid'/>
        //     <div className="container-fluid">
                
        //     {/* <div className="img-fluid" style={{ backgroundImage: `url(${havana})`,backgroundRepeat: 'no-repeat', width:'100%'  }} > */}
                
        //     <div className="log">
        //         <div className="CusLog">
        //         <div className=" row">
        //           <div className=" col-sm-4"></div>
        //           <div className="  col-sm-4">
        //               <div className="CusForm">
        //               <h1>Customer Login</h1>
        //               <h1>Driver Register</h1>
        //       <form>
                    
        //          <h5 for ="fullname"><label className="regstyle">Fullname</label>
        //            <input type="text" placeholder="Fullname...... " name="fullname" id="fullname"value={this.state.fullname} onChange={this.ChangeItems}required/>
        //            </h5>
        //              <h5 for="email"><label className="regstyle">Email</label>
        //             <input type="text" placeholder="Email........" name="email" id="email" value={this.state.email} onChange={this.ChangeItems}required/>
        //              </h5>
        //              <h5 for="username"><label className="regstyle">Username</label>
        //              <input type="text" placeholder="username........" name="username" id="username" value={this.state.username} onChange={this.ChangeItems}required/>
        //              </h5>
        //              <h5 for="context"><label className="regstyle">Contact</label>
        //              <input type="text" placeholder="Contact......." name="phone" id="phone" value={this.state.phone} onChange={this.ChangeItems}required/>
        //              </h5>
        //              <h5 for="citizenship"><label className="regstyle">Citizenship</label>
        //              <input type="text" placeholder="Citizenship........" name="citizenship" id="citizenship" value={this.state.citizenship} onChange={this.ChangeItems}required/>
        //              </h5>

        //              <div className="mb-3">
        //                      <Form.File id="formcheck-api-regular">
        //                      <p> <b><u>Licence</u></b></p>
        //                     <input type ="file" name="licence"  onChange={this.fileHandler}/> 
        //                     </Form.File>
        //              </div>

        //             <h5 for="dob"><label className="regstyle">DOB</label>
        //          <input type="date" placeholder="DOB........" name="dob" id="dob" value={this.state.dob} onChange={this.ChangeItems}required/>
        //              </h5>
                    
                     
        //              <h5 for="vechileNo"><label className="regstyle">Vechicle Number</label>
        //              <input type="text" placeholder="vechileNo......." name="vechileNo" id="vechileNo" value={this.state.vechileNo} onChange={this.ChangeItems}required/>
        //              </h5>

        //              <h5 for="model"><label className="regstyle"> Model</label>
        //              <input type="text" placeholder="Model......." name="model" id="model" value={this.state.model} onChange={this.ChangeItems}required/>
        //              </h5>
                    
                    
        //              <button type="submit" className='drivRegister_btn'onClick={this.SendItems}>Register</button>
                    
                    

        //          </form>
        //               </div>
        //           </div>
        //           <div className=" col-sm-4"></div>
        //         </div>
        //       </div>
        //     </div>
        // </div>
        // </div>
         
        
    
    )
    }
}

export default Driverregister;