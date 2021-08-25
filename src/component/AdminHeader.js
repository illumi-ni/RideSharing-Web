import React from 'react';
import '../css/Admindetail.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function AdminHeader() {
    const logout = ()=>{
        localStorage.clear();
        window.location.href = '/'
     
    }
    return (
        <div className="Adminheader">
            <div className ="Adminheader_left">
            <Link to="/AdminDashboard">
                    <div className="logo" >
                        <h2 >Ride Sharing</h2>
                    </div>
                    </Link>
           
            </div>
           

            <div className ="Adminheader_right">
                <div className="Adminheader_info">
                    <Avatar/>
                    
                    <Link to="/AdminDashboard">
                        <h4>Admin</h4> 
                    </Link>
                </div>
                <IconButton>
                <Link to="/Driverregister">
                <AddIcon/>       
                 </Link>
                
                </IconButton>

                <IconButton>
                <NotificationActiveIcon/>
                </IconButton>

                <IconButton>
                <Link to="/Admindetail">
                <ExpandMoreIcon/>      
                 </Link>
                </IconButton>
            <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            </div>
                
                    
             
                {/* <h4 onClick={logout}>Logout</h4> */}
                
            </div>
        </div>
    )
}

export default AdminHeader
