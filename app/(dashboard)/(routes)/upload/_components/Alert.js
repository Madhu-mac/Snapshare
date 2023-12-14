import { AlertCircle } from 'lucide-react'
import React from 'react'

export default function Alert({msg}) {
  return (
    <div className='  md:w-30 p-4 bg-red-500
    mt-5 text-white rounded-md flex gap-5 item-center'>
      <AlertCircle />
      {msg}
    </div>
  )
}
