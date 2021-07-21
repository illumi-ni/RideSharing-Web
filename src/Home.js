import { Link } from 'react-router-dom';
import React from 'react'
import './Home.css'

function Home() {
    return (
       <div>

            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active" >
                    <img src='./havana.jpg' alt='havana' className='img-fluid'/>
                    <div class="carousel-container">
                        <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Ride Sharing</span></h2>
                        <p class="animate__animated animate__fadeInUp"> If you don’t know where you are going, any road will get you there.</p>
                        
                        </div>
                    </div>
                    </div>

                
                    <div class="carousel-item" >
                
                    <img src='./hire.jpg' alt='hire' className='img-fluid'/>
                    <div class="carousel-container">
                        <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Ride Sharing</h2>
                        <p class="animate__animated animate__fadeInUp"> Everything in life is somewhere else, and you get there in a car.</p>
                        
                        </div>
                    </div>
                    </div>

                    
                    <div class="carousel-item" >
                    <img src='./carrent.jpg' alt='carrent' className='img-fluid'/>
                    <div class="carousel-container">
                        <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Ride Sharing</h2>
                        <p class="animate__animated animate__fadeInUp"> If everything seems under control, you’re just not going fast enough.</p>
                    
                        </div>
                    </div>
                    </div>

                </div>
                    <Link to ="/heroCarousel">
                <a class="carousel-control-prev"  role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>
                </Link>
                <Link to ="/heroCarousel">
                <a class="carousel-control-next"  role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
                </Link>

                </div>
            </section>




            
    </div>
    )
}

export default Home
