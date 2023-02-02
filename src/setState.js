import React,{Component} from 'react'
class Hai extends Component{
    constructor(){
        super();
            this.state={
                name:"HTML",
                Count:0
            }
    }
    increment(){
        this.setState({
            Count:this.state.Count+1
        },()=>{console.log('count',this.state.Count)})
       
        console.log(this.state.Count);
    }
    change(){
        this.setState({
            name:"JavaScript"
        })
    }
    render(){
        return(
            <>
            <h1>Count is: {this.state.name}{this.state.Count} </h1>
            
            
            </>
        )
    }
}

export default Hai