import React, { Component } from "react";
import BurgerLoggerDemo from "../assets.css/Devour_Burgers.gif";
import BurgerLogger from "../css/burgerLogger.css";

class ProjTempVid extends Component {

  state = {
    projects: [
    {
      id: "3",
      title: "Burger Logger",
      description: "Eat-The-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, it will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. Every burger will be stored in the database, whether devoured or not.",
      steps: [],
      video: BurgerLoggerDemo,
      tools: "Tools: Node, SQL, CLI",
      cssFile: BurgerLogger,
      frameWidth: 1248,
      frameHeight: 612
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
              <iframe width="900" height="800" src={this.state.individualProject.video}></iframe>
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