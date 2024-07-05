import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({AuthUser}) => {
  
  const logout=()=>{
    console.log("1")
    window.open("http://localhost:3600/auth/logout","_self")
    console.log("2")
  }
  return (
    
    <div className='bg-slate-500 text-white flex h-[50px] justify-between items-center w-full '>
      <span className='ml-5 '><Link to="/">lame app</Link></span>
      {
        AuthUser
        ?
        ( <ul className="list flex space-x-5 mr-5">
          <li className=""><img className='w-[32px] h-[32px] rounded-full' src={AuthUser.photos[0].value} alt="hello" /></li>
          <li className="">{AuthUser.displayName}</li>
          <li className="cursor-pointer "onClick={logout} >logout</li>
        </ul>)
        :
        (
          <div className='mr-5'><Link to="/login" >login</Link></div>
        )
       
      }
    </div>
  )
}

export default Navbar
