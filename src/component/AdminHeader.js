import React from 'react';
import '../css/Admindetail.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from 'react-router-dom';

function AdminHeader() {
    const logout = ()=>{
        localStorage.clear();
        window.location.href = '/'
     
    }
    return (
        <div className="Adminheader">
            <div className ="Adminheader_left">
           <h2>Ride Sharing</h2>
           
            </div>
           

            <div className ="Adminheader_right">
                <div className="Adminheader_info">
                    <Avatar/>
                    <h4>Admin</h4>
                </div>
                <IconButton>
                <AddIcon/>
                </IconButton>

                <IconButton>
                <NotificationActiveIcon/>
                </IconButton>

                <IconButton>
                <ExpandMoreIcon/>
                </IconButton>
                
                    
             
                {/* <h4 onClick={logout}>Logout</h4> */}
                
            </div>
        </div>
    )
}

export default AdminHeader
