import React, { Component } from 'react';
import './LeftSide.css' ;
class LeftSide extends Component {
  render() {
    return (
 <div className="col-md-2" >
            
<div className="lsb-content">

<h2>Types de contrat </h2>
<ul className="contrats-list">
  <li>CDI</li>
  <li>CDD</li>
  <li>Interim</li>
  <li>Stage</li>
  <li>Stage Preambauche</li>
  <li>Stage remuneré</li>
  <li>Stage non remuneré</li>
  <li>Non Contractuel</li>
  <li>Voir plus >></li>
</ul>
<h2>Villes </h2>
<ul className="city-list">
  <li>Rabat</li>
  <li>Tanger</li>
  <li>Chefchaoun</li>
  <li>Agadir</li>
  <li>Casablanca</li>
  <li>Eljadida</li>
  <li>Voir plus >></li>
</ul>
<h2>Entreprises </h2>
<ul className="company-list">
  <li>MyProgift </li>
  <li>Webhelp</li>
  <li>IBM</li>
  <li>Hp CDG</li>
  <li>Mc Donalds</li>
  <li>Labinal</li>
  <li>Voir plus >></li>
</ul>
</div>
</div>
  );
  }
}

export default LeftSide;
