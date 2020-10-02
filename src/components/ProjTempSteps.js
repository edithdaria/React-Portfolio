import React, { Component } from "react";
import heimdall_step1 from '../assets.css/Heimdall_Landing_Page.gif';
import heimdall_step2 from '../assets.css/Heimdall_All_Inventory.gif';
import heimdall_step3 from '../assets.css/Heimdall_New_Order.gif';
import heimdall_step4 from '../assets.css/Heimdall_New_Inventory.gif';
import "../css/exploreOutdoors.css";
import "../css/heimdall.css";


class ProjTempSteps extends Component {

    state = {
        projects: [{
            id: "0",
            title: "Heimdall",
            description: "Heimdall is an Inventory Management System application that allows users to access and keep track of their inventory records. Users have the ability to add, modify and see all their inventory and keep track of the items bought and sold",
            tryItYourself: "https://sheltered-tor-26517.herokuapp.com/",
            steps: ["Screen 1: You are on the welcome page. Click on the Inventory Button",
                "Screen 2: View your current inventory. Modify relevant fields of the existing inventory.",
                "Screen 3: Click on New Order button and log a purchase or sale.",
                "Screen 4: Add new inventory from a database that contains all relevant item skus, description and sale price details"],
            images: [heimdall_step1, heimdall_step2, heimdall_step3, heimdall_step4],
            tools: "Tools: Node, SQL, CLI"
        }],

        individualProject: []
    }


    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.step;
        console.log("id", id)
        const [projects] = this.state.projects.filter(project => project.id == id);
        console.log(projects);
        this.setState({
            individualProject: projects
        })
    }


    render() {

        return (
            <div className="container">
                <center>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <h1>{this.state.individualProject.title}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <p>{this.state.individualProject.description}</p>
                            <br /><br />
                            <hr className="solid" />
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <a href={this.state.individualProject.tryItYourself} target="_blank" className="btn btn-try btn-secondary btn-sm btn-md btn-lg active" role="button" aria-pressed="true">Try It Yourself</a>
                            <br /><br />
                            <hr className="solid" />
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <h4>How does it work?</h4>
                        </div>
                    </div>

                    <br />




        {(this.state.individualProject.images || []).map((image, index) => {
            const stepsDefined = this.state.individualProject.steps[index]
            return (
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <img src={image} className="img-thumbnail" />
                    </div>


                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="card-body">
                            <p className="card-text">{stepsDefined}</p>
                        </div>
                    </div>
                </div>
            )
        })}


                    <hr className="solid" />
                    <br /><br />


                    {/* <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-6">
        <div class="card-body">
        <p class="card-text">Screen 2: View your current inventory. Modify relevant fields of the existing inventory.</p>
        </div>
    </div>

    <div class="col-md-6 col-lg-6 col-sm-6">
        <img src="../assets.css/Heimdall_All_Inventory.gif" class="img-thumbnail"/>
    </div>
    </div>

    <hr class="solid"/>    
    <br/><br/>

    <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-6">
        <img src="../assets.css/Heimdall_New_Order.gif" class="img-thumbnail"/>
    </div>

    <div class="col-md-6 col-lg-6 col-sm-6">
        <div class="card-body">
        <p class="card-text">Screen 3: Click on New Order button and log a purchase or sale.</p>
        </div>
    </div>
    </div>

    <hr class="solid"/>    
    <br/><br/>

    <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-6">
        <div class="card-body">
        <p class="card-text">Screen 4: Add new inventory from a database that contains all relevant item skus, description and sale price details</p>
        </div>
    </div>

    <div class="col-md-6 col-lg-6 col-sm-6">
        <img src="../assets.css/Heimdall_New_Inventory.gif" class="img-thumbnail"/>
    </div>
    </div>

    <hr class="solid"/>    
    <br/><br/> */}

                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <p>Tools: Node, JavaScript, JQuery, HTML, Bootstrap, Best Buy API, Heroku, MySql, Sequelize</p>
                            <br />
                            <a href="https://github.com/edithdaria/Heimdall-Inventory_Management" target="_blank"><p id="git-hub">Curious to see how it was built? Click here to view the GitHub page</p></a>
                            <hr className="solid" />
                        </div>
                    </div>


                    <br /><br />

                </center>
            </div>
        )

    }
}

export default ProjTempSteps;