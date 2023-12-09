import React from 'react'
import Sidenav from '../_components/Sidenav'
///<reference types="cookies" />

export default function layout({children}) {
  return (
    <div className='  hidden h-full md:w-64 flex-col fixed inser-y-0 z-50'>
     <Sidenav />
     <div className=' ml-64'>
      {children}
     </div>
      </div>
  )
}
