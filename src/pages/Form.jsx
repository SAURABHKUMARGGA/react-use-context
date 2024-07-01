import axios from 'axios';
import React, { useState } from 'react'

export default function Form() {
    const [data,setData] = useState({
        email:"",
        name:"",
        userimage:"",
    });
    function submited(e){
        e.preventDefault();
       
        axios.post("http://localhost:5555/saveData",data,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <>
        <div className="container">
            <h2 className="text-center my-3">Contact Form</h2>
            <form method='POST' onSubmit={submited}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={data.email} onChange={(e)=>{setData({...data,[e.target.name]  : e.target.value})}} id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
                
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={data.name} onChange={(e)=>{setData({...data,[e.target.name]  : e.target.value})}} id="exampleInputPassword1" name="name"/>
                </div>
                
                <div className="mb-3">
                
                <input className="form-control" type="file" value={data.file} onChange={(e)=>{setData({...data,[e.target.name]  : e.target.files[0]})}} id="formFile" name="userimage"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}
