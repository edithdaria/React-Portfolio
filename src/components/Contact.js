import React, { Component } from "react";

class Contact extends Component {


    render() {
        return (
            <div class="container">
            <center>
              <form action="/submit" method="post">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group messageBox">
                      <label for="exampleFormControlInput1">Provide your Email address here</label>
                      <input type="text" name="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                    </div>
                  </div>
                </div>
        
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group messageBox">
                      <label for="exampleFormControlInput1">Provide your name here</label>
                      <input type="text" name="fullName" class="form-control" id="exampleFormControlInput1"
                        placeholder="First & Last Name"/>
                    </div>
                  </div>
                </div>
        
        
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group messageBox">
                      <label for="exampleFormControlTextarea1">Say a few words here</label>
                      <textarea type="text" name="message" class="form-control" id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                    </div>
                  </div>
                </div>
        
                <br/><br/>
        
                <button class="btn btn-md btn-secondary" id="submit" type="submit">Submit</button>
        
              </form>
        
            </center>
        
          </div>
        )
    }
}

export default Contact;