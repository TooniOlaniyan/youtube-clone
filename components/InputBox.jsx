import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {HiOutlineVideoCamera} from 'react-icons/hi'
import {BiHappyAlt} from 'react-icons/bi'
import {AiOutlineCamera} from 'react-icons/ai'

function InputBox() {
    const sendPost = (e) => {
        e.preventDefault()

    }
    const session = useSession()
    const fullName = session.data.user.name
    const splitName = fullName.split(' ')
    const firstName = splitName[0]
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image className='rounded-full '
            src={session.data.user.image}
            width={40}
            height={40}
            layout='fixed' />
            <form className='flex flex-1' >
                <input className='rounded-full h-12  bg-gray-100 flex-grow px-5 focus:outline-none' type="text" placeholder={`what's on your mind, ${firstName} ?`} />
                <button hidden type='submit' onClick={sendPost}>Submit</button>

            </form>
        </div>
        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon' >
                <HiOutlineVideoCamera className='h-7 text-red-500' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>

            </div>
            <div className='inputIcon' >
                <AiOutlineCamera className='h-7 text-green-400' />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>

            </div>
            <div className='inputIcon' >
                <BiHappyAlt className='h-7 text-yellow-300' />
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>

            </div>
        </div>
    </div>
  )
}

export default InputBox