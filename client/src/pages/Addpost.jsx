
import React, { useState } from 'react'

const Addpost = () => {
    const [data, setdata] = useState({
        title:"",
        description:""
    });
    const handleclick=async()=>{
        const res=await fetch("http://localhost:3600/api/post/addpost",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type": "application/json" 
            },
            body:JSON.stringify({
                title: data.title,
                description: data.description
            })
        });
        const dataa = await res.json();
        console.log(dataa)

    }
  return (
    <div className='flex flex-col justify-center items-center op h-screen '>
        title
        <input className='border' type='text' value={data.title} onChange={(e)=>{setdata({...data,title:e.target.value})}} />
        desc
        <input className='border' type='text' value={data.description} onChange={(e)=>{setdata({...data,description:e.target.value})}} />

        <button onClick={handleclick}>save</button>
    </div>
  )
}

export default Addpost