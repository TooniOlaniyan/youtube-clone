import Image from 'next/image'
import React from 'react'

function StoryCard({name , src , profile}) {
  return (
    <div className='relative h-14 w-14' >
        <Image className='absolute opacity-0 lg:opacity-100 top-10 rounded-full z-50' src={profile} width={40} height={40} objectFit='cover' layout='fixed' />
        <Image className='object-cover filter brightness-75 rounded-full lg:rounded-3xl' src={src}  layout='fill' />
    </div>
  )
}

export default StoryCard