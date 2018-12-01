import React , {Component} from 'react' ; 
import './Offer.css' ; 
import Employer from './Employer/Employer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ; 


class Offer extends Component {

    constructor(props){
      super(props)
      this.state = {
        desc : this.props.description
      }
    }
    componentDidMount(){
      console.log(this.state.desc)
    }

    renderSelectedArticle(){
      
    }

    render(){

        return(
        
        <Link to="articles"  >
          <div class="co-content" key={this.props.key}>
          <div class="co-head">
            <span class="emloyr-name inl" ><Employer nameO={this.props.employer} nbrOffers="" /><span>(2)</span></span>|
            <span class="timeToDate inl"> 3 days ago -- {this.props.inDate}</span>
          </div>
          
          <img  height="85" width="130" src={this.props.image} alt="" class="emloyr-img"/>
         
          <div class="employr-offer">
            <div class="">
              <span><h3 class="offer-title inl"> {this.props.title}  </h3></span>
                <p class="offer-desc">
                    {this.props.description} ...

                  </p>
            </div>

          </div>
          <div class="co-foot">
          <span class="employr-location">{this.props.location}</span>  <span>visites ({this.props.visites})</span> <span>share ({this.props.shares})</span>
          </div>
        </div>
         </Link>
        
           
        )
    }

}

// Offer.defaultProps = {
 
//     id : 'AAAAMMIN00445'
//   }

export default Offer  ; 