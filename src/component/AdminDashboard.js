import React, { Component } from 'react';
import '../css/AdminDashboard.css';


class AdminDashboard extends Component{
    render(){
        return(
           <div className="container-fluid">
               <div className="AdminDashboard"> 
                <div className="row">
                       
                       {/* <div className="col-md-12"> */}
                       <div className="col-md-1"></div>
                            <div className="box col-md-3">
                                <h1>Weekly gain</h1>
                                <h2 class=""> Rs.20,0000</h2>
                                 <h6 class="card-text">Increased by 60%</h6>
                            </div>
                            <div className="box col-md-3">
                                <h1>Total Customer</h1>
                                <h2 class="">1,208</h2>
                                 <h6 class="card-text">Increased by 60%</h6>
                            </div>
                            <div className="box col-md-3">
                                <h1>Total Driver</h1>
                                <h2 class="">200</h2>
                                 <h6 class="card-text">Increased by 60%</h6>
                          </div>
                          <div className="col-md-2"></div>
                            
                       </div>
                       <div className="row">
                       
                       <div className="col-md-1"></div>
                            <div className="box col-md-3">
                                <h1>Cancle Ride</h1>
                                <h2 class="">80</h2>
                                 <h6 class="card-text">Increased by 10%</h6>
                            </div>
                            <div className="box col-md-3">
                                <h1>Total Ride</h1>
                                <h2 class="">1,500</h2>
                                 <h6 class="card-text">Increased by 50%</h6>
                            </div>
                            <div className="box col-md-3">
                                <h1>Total Booking</h1>
                                <h2 class="">200</h2>
                                 <h6 class="card-text">Increased by 60%</h6>
                          </div>
                          <div className="col-md-2"></div>
                            
                       </div>
                      

                       <div class="row">
              <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="clearfix">
                      <h4 class="card-title float-left">Chart of customer and driver</h4>
                      <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right"></div>
                    </div>
                    <canvas id="visit-sale-chart" class="mt-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-5 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Round Chart</h4>
                    <canvas id="traffic-chart"></canvas>
                    <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <section id="Details">
                    <div className="customerdetailtable">
                        <div className="container-xl">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <table className="table table-striped table-hover" style={{position:"relative", marginBottom: "30px"}}>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email ID</th>
                                                
                                                <th>Subject</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             </div>
             </div>
           
          

         /* <div class="page-header">
        <h3 class="page-title">
          <span class="page-title-icon bg-gradient-primary text-white mr-2">
            <i class="mdi mdi-home"></i>
          </span> Dashboard
        </h3>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>
      <div class="row">
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-danger card-img-holder text-white">
            <div class="card-body">
              <img src="" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Weekly Sales <i class="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">$ 15,0000</h2>
              <h6 class="card-text">Increased by 60%</h6>
            </div>
          </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-info card-img-holder text-white">
            <div class="card-body">
              <img src="" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Weekly Orders <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">45,6334</h2>
              <h6 class="card-text">Decreased by 10%</h6>
            </div>
          </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-success card-img-holder text-white">
            <div class="card-body">
              <img src="" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Visitors Online <i class="mdi mdi-diamond mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">95,5741</h2>
              <h6 class="card-text">Increased by 5%</h6>
            </div>
          </div>
        </div>
      </div> 
       </div>
     </div> */
        )
        }
    }
    export default AdminDashboard
