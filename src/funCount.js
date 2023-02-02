import React,{useState} from 'react'

function Fun_Count(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <div>count is: {count}</div>
            <button onClick={increment}>click</button>
        </div>
    )
}
export default Fun_Count