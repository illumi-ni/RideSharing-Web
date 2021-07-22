import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import './Home.css'
import video from './video.mp4'

function Home(props) {
     // video to run
    // useState and useRef
    // const [isVideoPlaying, setIsVideoPlaying] =useState(false) 
    // const videoRef = useRef(null);
    // const onVideoPress = () =>{
    //     if(isVideoPlaying){
    //         // stop the video because we have already assigned false in isVideoPlaying in line 8
    //         videoRef.current.pause()
    //         setIsVideoPlaying(false)
    //     }else{
    //         // play the video 
    //         videoRef.current.play()
    //         setIsVideoPlaying(true)
    //     }
    // }
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
                
                    <img src='./taxi.jpg' alt='taxi' className='img-fluid'/>
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
                   
                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>
               
                <a class="carousel-control-next"  href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
               

                </div>
            </section>

    {/* <main id="main">
            <section id="about" class="about">
            <div class="container">

                <div class="row content">
                <div class="col-lg-6">
                <div className='videoCard'>
                        <video 
                    ref={videoRef}
                    onClick={onVideoPress}
                    className="videoCard_player"
                        src={video}
                       
                        alt='IG reel video'
                        loop
                        />
                        </div>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                   <h1>About Ride Sharing</h1>
                    </p>
                    {/* <ul>
                    <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                    <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                    <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                    </ul> */}
                    {/* <p class="fst-italic">
                    A ridesharing company (also known as a transportation network company, ride-hailing service; the vehicles are called app-taxis or e-taxis) is a company that,
                     via websites and mobile apps, 
                    matches passengers with drivers of vehicles for hire that, unlike taxicabs, cannot legally be hailed from the street.
                    </p>
                </div>
                </div>

            </div>
            </section>
        </main>  */}



            
    </div>
    )
}

export default Home
