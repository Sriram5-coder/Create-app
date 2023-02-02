import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Details() {
    let [data,setData] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/posts').then((res)=>{
            //console.log(res.data);
            setData(res.data)
        })
    })
const Remove = (id)=>{
  if(window.confirm('Do you want remove')){
    // const person ={id,name,phone,email}
  axios.delete("http://localhost:8000/posts/"+id)
  .then(res=>{console.log(res.data)
    window.location.reload()
  alert('Successfuly Detele')

  })

}

}

const  Edit = (id)=>{
alert("Edit the id"+id)
navigate('/edit')


}
    return (
    <div className="container">
  <h2>User Details</h2>
  <table className="table">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Full Name</th>
        <th>Roll No</th>
        <th>College</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((ele,index)=>{
         return (<tr>
         <td>{ele.id}</td>
         <td>{ele.name}</td>
         <td>{ele.rollno}</td>
         <td>{ele.college}</td>
         <td>
          <button className='btn bg-info' onClick={()=>Edit(ele.id)}>Edit</button>
          <button className='btn bg-primary' onClick={()=>Remove(ele.id)}>Delete</button></td>
       </tr>)
      })}      
    </tbody>
  </table>
</div>
  )
}

export default Details