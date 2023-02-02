import React,{Component} from 'react'

class fsd extends Component{
    constructor(){
        super();
        this.state={
            name:"React"
        }
    }
    render(){
        return(
            <>
            <h1 style={{color:"red"}}>Hello this is {this.props.set}</h1>
            
            <p>hello</p>
            </>
        )
    }
}
export default fsd