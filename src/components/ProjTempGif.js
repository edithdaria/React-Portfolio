import React, { Component } from "react";
import BurgerLoggerDemo from "../assets.css/Devour_Burgers.gif";
import "../css/burgerLogger.css";

class ProjTempGif extends Component {

  state = {
    projects: [
    {
      id: "3",
      title: "Burger Logger",
      description: "Eat-The-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, it will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. Every burger will be stored in the database, whether devoured or not.",
      tryItYourself: "https://frozen-tundra-34124.herokuapp.com/",
      gif: BurgerLoggerDemo,
      tools: "Tools: MySQL, Node, Express, Handlebars and a homemade ORM.",
      href: "https://github.com/edithdaria/Burger"

    }
    ],

    individualProject: []
  }


  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.gif;
    console.log("id", id)
    const [projects] = this.state.projects.filter(project => project.id == id);
    console.log(projects);
    this.setState({
      individualProject: projects
    })
  }

 
  render() {

    return (
      <div className="burgerLogger container">
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
                  <a href={this.state.individualProject.tryItYourself} target="_blank"
                      className="btn btn-try btn-secondary btn-sm btn-md btn-lg active" role="button" aria-pressed="true">Try It
                      Yourself</a>
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
                  <img src={this.state.individualProject.gif} className="img-thumbnail"/>
              </div>
          </div>

          <hr className="solid"/>
          <br/><br/>

          <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12">
                  <p>{this.state.individualProject.tools}</p>
                  <br/>
                  <a href={this.state.individualProject.href} target="_blank">
                      <p id="git-hub">Curious to see how it was built? Click here to view the GitHub page</p>
                  </a>
                  <hr className="solid"/>
              </div>
          </div>


          <br/><br/>

      </center>
  </div>
    )

  }
}

export default ProjTempGif;