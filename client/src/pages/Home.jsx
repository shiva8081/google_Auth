import React from 'react'
import { posts } from '../data.js'
import Cards from '../components/Cards.jsx'

const Home = () => {
  return (
    <div className='flex p-10 justify-between'>
      {posts.map((post,index)=>( <Cards post={post} key={index}/> ))}

    </div>
  )
}

export default Home
