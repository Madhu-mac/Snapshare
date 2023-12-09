import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Sidenav() {
  const menuList =[
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: 'upload'
    },
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/upgrade'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    },
  ]
  return (
    <div> 
      <div>
        <Image src='/logo.svg' width={150} />
      </div>
      <div className='flex flex-col float-left w-full'>
      {menuList.map((item, index) =>(
        <button className=' flex gap-2 p-4 px-0 
         hover:bg-gray-100 w-full'>
          <item.icon />
          <h2>{item.name}</h2>
        </button>
      ))}
      </div>
    </div>
  )
}
