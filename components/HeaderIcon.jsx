import React from 'react'

function HeaderIcon({Icon}) {
  return (
    <div className='cursor-pointer group flex items-center rounded-xl active:border-b-2 border-blue-500 md:px-10 md:hover:bg-gray-100 sm:h-14'>
        <Icon className='h-5 w-10 text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500'  />


    </div>
  )
}

export default HeaderIcon