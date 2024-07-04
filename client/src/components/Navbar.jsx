import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-500 text-white flex h-[50px] justify-between items-center w-full '>
      <span className='ml-5 '>lama app</span>
      <ul className="list flex space-x-5 mr-5">
        <li className=""><img className='w-[32px] h-[32px]' src="https://avatar.iran.liara.run/public/37" alt="hello" /></li>
        <li className="">shiva</li>
        <li className="cursor-pointer ">logout</li>
      </ul>
    </div>
  )
}

export default Navbar
