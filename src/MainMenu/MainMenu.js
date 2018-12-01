import React, { Component } from 'react';
import   './MainMenu.css' ; 
import logo from "./imgs/adeellogo.png";
import {Link} from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
        
    //Nav bar !
    <div id="header-menu" className="">
    <header className="clearfix">
      <div className="cont-hw container">
              <div className="header-left">
              <img height="73" src={logo} alt=""/>
              </div>
              <div className="header-right">
                  <label for="open">
                      <span className="hidden-desktop"></span>
                  </label>
                  <input type="checkbox" name="" id="open" />
                  <nav>
                      <Link to="/" >Home</Link>
                      <a >Trending </a>
                      <a >Employeurs </a>
                      <a >News </a>
                      <a >Login  </a>

                  </nav>
              </div>
          </div>
      </header>
  </div>
//End of the navbar 
    );
  }
}

export default MainMenu;
