import React,{useState} from 'react'

function Logged(){
    const[log,setLog]=useState(false)
    
    const checkLogin=()=>{
         setLog(!log)
        //{log ? setLog(false):setLog(true)}
    }
    return(
        <div>
            {log ? <h1>logged</h1>:<h1>not logged</h1>}
            <button onClick={checkLogin}>Click</button>
        </div>
    )
}

export default Logged