import React from "react";

const Footer = () => {

    return (
        <footer>
        <div className="container-fluid fixed-bottom">
          <br/>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div>
                <a href="https://github.com/edithdaria?tab=repositories" target="_blank"><i
                  className="fab fa-github-square fa-lg" ></i></a>
                <a href="https://www.linkedin.com/in/edith-daria-nadarajah-038b3093/" target="_blank"><i
                    className="fab fa-linkedin fa-lg" ></i></a>
                <a href="./contact.html" target="_blank"><i className="fas fa-envelope-square fa-lg"
                    ></i></a>    
              </div>
            </div>
          </div>
          <span className="text-muted">
            Copyright &copy; Daria Nadarajah 2020
          </span>
        </div>
      </footer>


    )

}

export default Footer;