import React from 'react'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'


function Header() {
  return (
    <div>
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex items-center ml-2 rounded-full border p-2 bg-gray-100'>
            <BsSearch className='h-3' />
            <input className='bg-transparent ml-2 flex' type="text" placeholder='Search Facebook' />
        </div>
      </div>
    </div>
  )
}

export default Header