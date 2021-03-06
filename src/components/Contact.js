import React, { Component } from "react";

class Contact extends Component {


    render() {
        return (
            <div className="container">
            <center>
              <form action="/submit" method="post">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group messageBox">
                      <label htimlFor="exampleFormControlInput1">Provide your Email address here</label>
                      <input type="text" name="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                    </div>
                  </div>
                </div>
        
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group messageBox">
                      <label htimlFor="exampleFormControlInput1">Provide your name here</label>
                      <input type="text" name="fullName" className="form-control" id="exampleFormControlInput1"
                        placeholder="First & Last Name"/>
                    </div>
                  </div>
                </div>
        
        
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group messageBox">
                      <label htimlFor="exampleFormControlTextarea1">Say a few words here</label>
                      <textarea type="text" name="message" className="form-control" id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                    </div>
                  </div>
                </div>
        
                <br/><br/>
        
                <button className="btn btn-md btn-secondary" id="submit" type="submit">Submit</button>
        
              </form>
        
            </center>
        
          </div>
        )
    }
}

export default Contact;