import React,{useState} from 'react'

function Listmap() {
    //const [arr,setArr]=useState([1,2,3]);
    let arr=["Sriram","ram","sr","mb"];
    let trainees=[{
        "name":"sriram",
        "id":"1205"
    },
    {
        "name":"vijay",
        "id":"1252"
    },
    {
        "name":"mb",
        "id":"1260"
    }]
    return(
        <div>
            <table border={1}>
                {trainees.map((ele,index)=>{
                    return (<tr>
                        <td key={index}>{ele.name}</td>
                        <td key={index}>{ele.id}</td>
                        </tr>)
                })}
            </table>
        </div>
    )
}
export default Listmap