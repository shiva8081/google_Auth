import React from 'react'
const Cards = ({post}) => {
  return (
    <div className='m-6 border-2 p-4 shadow-2xl '>
     <span className='title'>{post.title}</span>
     <img className=' ' src={post.img} alt="" />
     <p>{post.desc}</p>
     <button className='border rounded-xl bg-slate-400 p-1 '>read more....</button>
    </div>
  )
}
export default Cards
