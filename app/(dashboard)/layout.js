import React from 'react'
import Sidenav from './_components/Sidenav'
import TopHeader from './_components/TopHeader'

export default function layout({children}) {
  return (
    
      <div>
       <div className='h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
        <Sidenav />
       </div>
       <div className='md:ml-64'>
        <TopHeader /> 
        {children}
        </div>
      </div>
   
  )
}
