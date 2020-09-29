import React, { Component } from "react";
import ReadmeDemo from "../assets.css/ReadmeDemo.mp4";
import BurgerLoggerDemo from "../assets.css/Devour_Burgers.gif";
import Readme from "../css/readme.css";
import BurgerLogger from "../css/burgerLogger.css";

class ProjTempVid extends Component {

  state = {
    projects: [{
      id: "2",
      title: "README Generator",
      description: "When creating an open source projects on GitHub, it is important to have a README with information about the app -- usage of the app, how to install it, how to report issues, and how to make contributions to the projects. This command-line application will allow for quick and easy generation of a projects README to get started quickly.",
      step_1: "Step 1: Installation of node.js is required",
      step_2: 'Step 2: Clone the repo from this <a href="https://github.com/edithdaria/Readme-Generator" target="_blank" style="text-decoration: none;">GitHub page</a>',
      step_3: "Step 3: Open the repository on the terminal and run the following: npm i ",
      step_4: "Step 4: Then, run the following: node index.js",
      step_5: "Step 5: Now you can start using the readme generator",
      video: ReadmeDemo,
      tools: "Tools: Node, SQL, CLI",
      cssFile: Readme
    },
    {
      id: "3",
      title: "Burger Logger",
      description: "Eat-The-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, it will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. Every burger will be stored in the database, whether devoured or not.",
      step_1: "",
      step_2: '',
      step_3: "",
      step_4: "",
      step_5: "",
      video: BurgerLoggerDemo,
      tools: "Tools: Node, SQL, CLI",
      cssFile: BurgerLogger
    }
  ],

  individualProject: []
  }


  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.vid;
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
        <style src={this.state.individualProject.cssFile}></style>
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
              <center>
                <h4>How does it work?</h4>
              </center>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="card-body">
                <p className="card-text">{this.state.individualProject.step_1}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="card-body">
                <p className="card-text">{this.state.individualProject.step_2}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="card-body">
                <p className="card-text">{this.state.individualProject.step_3} </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="card-body">
                <p className="card-text">{this.state.individualProject.step_4}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="card-body">
                <p className="card-text">{this.state.individualProject.step_5}</p>
              </div>
            </div>
          </div>

          <hr className="solid" />
          <br /><br />

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <center>
                <h4>App demonstration:</h4>
              </center>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <iframe width="600" height="315" src={this.state.individualProject.video}></iframe>
            </div>
          </div>

          <hr className="solid" />
          <br /><br />

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <p>{this.state.individualProject.tools}</p>
              <br />
              <hr className="solid" />
            </div>
          </div>


          <br /><br />

        </center>
      </div>
    )

  }
}

export default ProjTempVid;