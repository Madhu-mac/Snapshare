'use client'
import React, { useEffect } from 'react'

export default function Filepreview({params}) {
  useEffect(() =>{
     console.log(params?.fileId)
  },)
  return (
    <div>Filepreview</div>
  )
}