import React from 'react'


import Story from './Story'
import Post from './Post'

function Feed() {
  return (
    <div>
      <div className=' story bg-info'><Story /></div>
      <div><Post /> </div>

    </div>
  )
}

export default Feed