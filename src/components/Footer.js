import React from "react";

const Footer = () => {

    return (
        <footer>
        <div class="container-fluid fixed-bottom">
          <br/>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div>
                <a href="https://github.com/edithdaria?tab=repositories" target="_blank"><i
                  class="fab fa-github-square fa-lg" ></i></a>
                <a href="https://www.linkedin.com/in/edith-daria-nadarajah-038b3093/" target="_blank"><i
                    class="fab fa-linkedin fa-lg" ></i></a>
                <a href="./contact.html" target="_blank"><i class="fas fa-envelope-square fa-lg"
                    ></i></a>    
              </div>
            </div>
          </div>
          <span class="text-muted">
            Copyright &copy; Daria Nadarajah 2020
          </span>
        </div>
      </footer>


    )

}

export default Footer;