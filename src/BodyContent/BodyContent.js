import React, { Component } from 'react';
import './BodyContent.css';
// import 'bootstrap/dist/css/bootstrap.min.css' ;
import LeftSide from '../LeftSide/LeftSide' ;
import CoreOffers from '../CoreOffers/CoreOffers';
import RightSide from '../RightSide/RightSide';


class BodyConetent  extends Component {
  render() {
    return (
     <div className="container cont-w">
     <div className="row">
      <LeftSide/>
      <CoreOffers/>
      <RightSide/>
    </div>
    </div>
   
    );
  }
}

export default BodyConetent;
