import React, { Component } from "react";
import ReadmeDemo from "../assets.css/ReadmeDemo.mp4";
import "../css/readme.css";


class ProjTempVid extends Component {

  state = {
    projects: [{
      id: "2",
      title: "README Generator",
      description: "When creating an open source projects on GitHub, it is important to have a README with information about the app -- usage of the app, how to install it, how to report issues, and how to make contributions to the projects. This command-line application will allow for quick and easy generation of a projects README to get started quickly.",
      steps: ["Step 1: Installation of node.js is required",
        'Step 2: Clone the repo from this <a href="https://github.com/edithdaria/Readme-Generator" target="_blank" style="text-decoration: none;">GitHub page</a>',
        "Step 3: Open the repository on the terminal and run the following: npm i ",
        "Step 4: Then, run the following: node index.js",
        "Step 5: Now you can start using the readme generator"],
      video: ReadmeDemo,
      tools: "Tools: Node, SQL, CLI"
    }],

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
      <div className="readme container">
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

          {(this.state.individualProject.steps || []).map(step => {
            return (

              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                  <div className="card-body">
                    <p className="card-text">{step}</p>
                  </div>
                </div>
              </div>

            )
          })}


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