import React from 'react'
import Image from 'next/image'
import { BsSearch, BsFlag, BsBell } from 'react-icons/bs'
import {
  AiOutlineHome,
  AiOutlinePlayCircle,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import HeaderIcon from './HeaderIcon'
import {TbGridDots} from 'react-icons/tb'
import {BiMessage} from 'react-icons/bi'
import {RiArrowDownSLine} from 'react-icons/ri'



function Header() {
  return (
    <div className='flex w-[100vw] items-center sticky top-0 bg-white z-50 p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex items-center ml-2 rounded-full border p-2 bg-gray-100'>
            <BsSearch className='h-3 text-gray-600' />
            <input className='hidden  md:inline-flex bg-transparent ml-2 outline-none placeholder-gray-500' type="text" placeholder='Search Facebook' />
        </div>
      </div>
      <div className='flex items-center justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon Icon={AiOutlineHome}/>
            <HeaderIcon Icon={BsFlag}/>
            <HeaderIcon Icon={AiOutlinePlayCircle}/>
            <HeaderIcon Icon={AiOutlineShoppingCart}/>
            <HeaderIcon Icon={HiUserGroup}/>
             
        </div>
      </div>
      <div className='flex items-center sm:justify-end space-x-2 cursor-pointer'>
        {/* profile */}
        <p className='whitespace-nowrap pr-3 font-semibold'>Tooni Olaniyan</p>
        <TbGridDots className='icon'/>
        <BiMessage className='icon'/>
        <BsBell className='icon'/>
        <RiArrowDownSLine className='icon'/>
      </div>
    </div>
  )
}

export default Header