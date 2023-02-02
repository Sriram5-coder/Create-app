import React from 'react'


const dd={
    backgroundColor:"red",
    color:"gray"
}
const Sample=(props)=>{
    const{student,roll,clg,branch}=props
    return <h2>This is {student} {roll} {clg} {branch}</h2>
}
export default Sample