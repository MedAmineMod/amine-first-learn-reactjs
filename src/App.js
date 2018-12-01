import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css' ;
import BodyConetent from './BodyContent/BodyContent';
import MainMenu from './MainMenu/MainMenu' ; 
import './App.css';
import Articles from  './Articles/Articles';

//ROuter 
import { BrowserRouter , Route, Link } from 'react-router-dom' ; 

// let dara = require('./server')



class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
     
      <BrowserRouter>
      <div>    
      <Route exact={true}  path="/" render={()=>(
        <div>
        <MainMenu/>
        <BodyConetent/>
      </div>
      )} />

      <Route exact={true} path="/articles" render={()=>(
       <div>
       <MainMenu/>
        <Articles desc="amine"/> 
        </div>
        )} />
      
      </div>
   </BrowserRouter>
   

    );
  }
}

export default App;
