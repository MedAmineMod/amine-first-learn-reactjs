import React , {Component} from 'react' ; 
// import './Employer.css' ; 

class Employer extends Component {

    constructor(props){
        super(props)
     
        this.state = {
            empName : 'xxx',
            nbOfoffers : '0'
        } 
    }   
    componentDidMount(){
        if (this.state.empName.length > 1 ) {
            this.setState({empName : 'nananana'})
            console.log(this.state.empName.length)
        }
  
    }

    render(){
        
        // console.log(this.state.empName)
        return (
            <span>
                   
                   
                     {this.props.nameO} 
            </span>
        )
    }
}

export default Employer ;  
