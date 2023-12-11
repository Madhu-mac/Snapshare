import { UserButton } from '@clerk/nextjs'
import React from 'react'


export default function Files() {
  return (
    <div>Files
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
