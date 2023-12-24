import { UserButton } from '@clerk/nextjs'
import React from 'react'

 
export default function Files() {
  return (
    <div className="bg-white p-8">
      <UserButton afterSignOutUrl="/"/>
      <h1 className="text-2xl font-semibold mb-4">My Files</h1>
      <div className="mb-6">
        <button className="bg-gray-200 text-black p-2 rounded-md">
          Total File
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="w-48 border border-gray-300">File Name</th>
            <th className="w-32 border border-gray-300">Type</th>
            <th className="w-24 border border-gray-300">Size</th>
            <th className="w-24 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {/* Sample rows */}
          {[...Array(4)].map((_, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="font-medium p-2 border-r border-gray-300">
                File Name {index + 1}
              </td>
              <td className="p-2 border-r border-gray-300">image/png</td>
              <td className="p-2 border-r border-gray-300">0.{index + 1}</td>
              <td className="p-2">
                <button className="hover:bg-blue-500 hover:text-white text-blue-500 p-2 rounded-md">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
