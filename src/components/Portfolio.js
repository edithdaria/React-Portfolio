import React, { Component } from "react";
import './style.css';
import explore_outdoors from "../assets.css/explore_outdoors_540x293.jpg";
import Heimdall from "../assets.css/Heimdall_540x293.JPG";
import Readme from "../assets.css/readme_540x293.jpg";
import Burger from "../assets.css/burger_img_540x293.jpg";
import { Link } from "react-router-dom";


class Portfolio extends Component {

    state = {
        projects: [
            {
                src: explore_outdoors,
                name: "Explore Outdoors",
                alt: "Explore the outdoors",
                template: "steps"
            },

            {
                src: Heimdall,
                name: "Heimdall",
                alt: "pop icon of the character 'Heimdall'",
                template: "steps"
            },

            {
                src: Readme,
                name: "Readme Generator",
                alt: "an image of that says 'Readme Generator' on a blue background",
                template: "vid"
            },

            {
                src: Burger,
                name: "Burger Logger",
                alt: "An image of a cartoon image of a burger",
                template: "gif"
            }
        ]
    }

    render() {
        return (

            <div className="container">

                <div className="row">

                    {this.state.projects.map((project, index) => {
                        return (

                            <div className="col-lg-6 col-md-6 col-sm-6"  key={index}>
                                <div className="card">
                                <Link to={"/" + project.template + "/" + index}>
                                    <img src={project.src} className="card-img-top" alt="Explore the outdoors" />
                                    </Link>
                                    <div className="card-title">
                                        <p className="card-text">{project.name}</p>
                                    </div>

                                </div>
                            </div>

                        )
                    })

                    }
                </div>

            </div>
        )
    }
}

export default Portfolio;