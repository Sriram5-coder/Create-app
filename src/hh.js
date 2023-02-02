import React,{Component} from 'react'

class fsdss extends Component{
    constructor(){
        super();
        this.state={
            name:"React"
        }
    }
    goChange(){
        this.setState({
            name:"MB"
        })
    }
    render(){
        return(
            <>
            <h1>hello{this.state.name}</h1>
            <button onClick={()=>this.goChange}>Click to change</button>
            </>
        )
    }
}
export default fsdss