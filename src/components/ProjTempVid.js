import React, { Component } from "react";
import ReadmeDemo from "../assets.css/demo.mp4";

class ProjTempVid extends Component{

    state = {
        projects: [{
            id: "0",
            title: "README Generator",
            description: "When creating an open source projects on GitHub, it is important to have a README with information about the app -- usage of the app, how to install it, how to report issues, and how to make contributions to the projects. This command-line application will allow for quick and easy generation of a projects README to get started quickly.",
            step_1: "Step 1: Installation of node.js is required",
            step_2: 'Step 2: Clone the repo from this <a href="https://github.com/edithdaria/Readme-Generator" target="_blank" style="text-decoration: none;">GitHub page</a>',
            step_3: "Step 3: Open the repository on the terminal and run the following: npm i ",
            step_4: "Step 4: Then, run the following: node index.js",
            step_5: "Step 5: Now you can start using the readme generator",
            video: ReadmeDemo,
            tools: "Tools: Node, SQL, CLI"
        }]
    }

    state = {
      individualProject: null
    }

    componentDidMount(){
      let id = this.props.match.params.vid;
      const projects = this.state.projects.filter(project =>  project.id == id);
      this.setState({
        individualProject: projects
      })
    }

    render(){

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
                    <br/><br/>
                    <hr className="solid"/>
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <center>
                        <h4>How does it work?</h4>
                    </center>
                </div>
            </div>

            <br/>

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
        
              <hr className="solid"/>
              <br/><br/>

              <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                      <center>
                          <h4>App demonstration:</h4>
                      </center>
                  </div>
              </div>
  
              <br/>

            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">           
                    <iframe width="600" height="315" src={this.state.individualProject.video}></iframe>
                </div>
            </div>

            <hr className="solid"/>
            <br/><br/>

            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <p>{this.state.individualProject.tools}</p>
                    <br/>
                    <hr className="solid"/>
                </div>
            </div>


            <br/><br/>

        </center>
    </div>
      )

    }
}

export default ProjTempVid;