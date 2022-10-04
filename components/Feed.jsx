import React from 'react'
import Stories from './Stories'

function Feed() {

  return (
    <div className=' h-[200vh] w-[50vw] overflow-y-scroll mx-auto'>
       <div className='flex'>
        <Stories/>
       </div>
    </div>
  )
}

export default Feed