import React,{useState,useEffect} from 'react'
import axios from 'axios'
function GetData(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setData(res.data))
    })
    return(
        <div>
            <table border="">
                <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                {
                    data.map((ele,index)=>{
                        return <tr>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.body}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default GetData