import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Edit() {
  let [data,setData] = useState([]);
  const {pid} = useParams()

  useEffect(()=>{
    axios.get('http://localhost:8000/posts/'+pid).then((res)=>{
        // console.log(res.data);
        setName(res.data.name)
        setRollno(res.data.rollno)
        setCollege(res.data.college)
    })
})
const [id,setId] = useState("");
const [name,setName] = useState("");
const [rollno,setRollno] = useState("");
const [college,setCollege] = useState("");

const handleSubmit = (e) => {
    const person = {id,name,rollno,college}
    e.preventDefault()
    axios.put('http://localhost:8000/posts', person).then((res)=>{
        console.log(res)
        // navigate('/details')
    })
}


  return (
    <div className='container'>
    <h2>User Form</h2>
    <form onSubmit={handleSubmit}>
       <div className="form-group">
       <label for="fullname">Full Name:</label>
       <input type="text" className="form-control"
        id="fullname" 
       placeholder="Enter Name" name="name" 
       value={data.name} onChange={(e)=>{setName(e.target.value)}}/>
       </div>
       <div className="form-group">
       <label for="rollno">Roll No:</label>
       <input type="text" className="form-control" id="rollno" 
       placeholder="Enter Roll No" name="rollno"
       value={data.rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
       </div>
       <div className="form-group">
       <label for="college">College:</label>
       <input type="text" className="form-control" id="college" 
       placeholder="Enter College Name" name="college" 
       value={data.college} onChange={(e)=>{setCollege(e.target.value)}} />
       </div>
       <br />
       <button type="submit" className="btn btn-primary">Update</button>
   </form>
</div>
)
}

export default Edit