import React from "react";
import './style.css';
import supply_chain_managment from '../assets.css/supply_chain_managment_480x270.gif';
import anomaly_detection from '../assets.css/anomaly_detection_data_science_480x270.gif';
import software_development from '../assets.css/software_development_480x270.gif';

//functional component
const Home = () => {

    return (

        <div className="container">
            <center>
                <div className="row">
                    <div className="col-md-12">

                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img src={supply_chain_managment} className="d-block w-100" alt="an animated image of typewriter surrounded by ships and clouds and cranes" />
                                </div>

                                <div className="carousel-item">
                                    <img src={anomaly_detection} className="d-block w-100" alt="an animated image of a graph that says signal-category=Anomaly" />
                                </div>

                                <div className="carousel-item">
                                    <img src={software_development} className="d-block w-100" alt="a moving image of many code lines fading appearing and fading" />
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <p>I'm harnessing my web development skills to find technical solutions to everyday logistics problems.
                        I have worked on supply chain projects ranging from detecting anomalies in shipping data to analysing shipping contracts.
                        Take a peek at the portfolio page to view my spare-time projects.
          <a id="resumeLink" target="_blank" href="./views/resume.html">Click here to view my résumé</a>
                        </p>


                        <br /><br />
                    </div>
                </div>
            </center>
        </div>


    )

}

export default Home;