import Image from 'next/image'
import React from 'react'

function SideBarRow({title , Icon , src}) {
  return (
    <div>
        {src && (
            <Image className='rounded-full' src={src} width={30} height={30} layout='fixed' />
        )}
        {Icon && (
            <Icon className='h-8 w-8 text-blue-500'/>
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>

    </div>
  )
}

export default SideBarRow