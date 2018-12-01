import React , {Component} from 'react' ;
import MainMenu from '../MainMenu/MainMenu';
// import Offers from './Offers/Offers';
import { BrowserRouter , Route, Link } from 'react-router-dom' ; 


class Articles extends Component {
    constructor(props){
        super(props)

    }
    

    render(){
        return (
                <div>
                    <MainMenu/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <h1>Articles page ! -- {this.props.desc}</h1>
                    <a href="/">Back to Home !</a>

                    {/* 
                        --title of the article 
                        --Employer img and name 
                        --Publishing date 
                        --text
                        
                    */}
                </div>
              

        )
    }
    
}
export default Articles