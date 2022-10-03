import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"


function LogIn() {
  return (
    <div className='grid place-items-center h-[100vh]'>
        <Image src='https://links.papareact.com/t4i' objectFit='contain' width={60} height={60}/>
        <h1 onClick={signIn} className='bg-blue-500 p-4 rounded-full text-white text-center cursor-pointer'>Log in with Facebook</h1>
        
    </div>
  )
}

export default LogIn