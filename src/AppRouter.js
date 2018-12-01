import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css' ;
import BodyConetent from './BodyContent/BodyContent';
import MainMenu from './MainMenu/MainMenu' ; 
import Articles from  './Articles/Articles';
import App from './App';


//ROuter 
import { BrowserRouter, Route, Link } from 'react-router-dom' ; 

// let dara = require('./server')

class AppRouter extends Component {
  render() {
    return (
     <div>
         {/* <BrowserRouter>
            <Route exact  path="/" Component={App}/>
            <Route path="/Articles" Component={Articles}/>
         </BrowserRouter> */}
  
      </div>
     
   

    );
  }
}

export default AppRouter;
