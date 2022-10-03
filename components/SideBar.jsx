import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import SideBarRow from './SideBarRow'
import { HiUserGroup ,HiOutlineDesktopComputer } from 'react-icons/hi'
import {FiUsers} from 'react-icons/fi'
import {BiShoppingBag ,BiChevronDown} from 'react-icons/bi'
import {AiOutlineCalendar , AiOutlineClockCircle} from 'react-icons/ai'

function SideBar() {
    const session = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SideBarRow src={session.data.user.image} title={session.data.user.name} />
        <SideBarRow Icon={FiUsers} title='Friends' />
        <SideBarRow Icon={HiUserGroup} title='Groups' />
        <SideBarRow Icon={BiShoppingBag} title='Marketplace' />
        <SideBarRow Icon={HiOutlineDesktopComputer} title='Watch' />
        <SideBarRow Icon={AiOutlineCalendar} title='Event' />
        <SideBarRow Icon={AiOutlineClockCircle} title='Memories' />
        <SideBarRow Icon={BiChevronDown} title='See More' />

    </div>
  )
}

export default SideBar