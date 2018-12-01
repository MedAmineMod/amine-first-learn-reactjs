import React, { Component } from 'react';
import './CoreOffers.css';
import Offer from '../Offer/Offer'; 
import Employer from '../Offer/Employer/Employer';
import Articles from '../Articles/Articles' ;


//hadii statfull component (Container cmp >> mafihah html f render) 
//Had l container hiya li catgerer state dyal  <Offer/> 
//lblan hnaya houwa ana had l statefull kat initialiser fiha states fiyal "Child CMP"
// apres kadwzhum f les Props dyal had l Child CMP 
class CoreOffers  extends Component {
  
  state ={
    offers : []   
  }
  getOffers =  _ =>{
    fetch('http://localhost:3003/AllProducts')
    .then(response => response.json())
    .then(response => this.setState({offers : response.data}))
    .catch(err => console.error(err))
    
  }
  componentDidMount(){
    this.getOffers()
  }
  renderAllOffers = ({id, title  , inDate, description  , location , shares , visites , image , employer}) =>{

    description =  description.substring(0 ,100)
    return  <Offer 
              id={id} 
              title = {title}
              inDate = {inDate}
              description = {description}  
              location ={location}
              shares = {shares}
              visites = {visites}
              image ={image}
              employer= {employer} />
  }

  render() {
    const {offers} =  this.state ; 

    return (
      
      <div class="col-md-8" >    

              {offers.map(this.renderAllOffers)}    
      </div>

    );
  }
}


export default CoreOffers;
