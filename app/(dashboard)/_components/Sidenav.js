import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { File, Shield, Upload } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Sidenav({ closeSideBar }) {
  const router = useRouter(); 
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=' shadow-sm border-r h-full'>
      <div className=' p-5 border-b'>
        <Image src='/logo.png' height={100} width={70} />
      </div>
      <div className='flex flex-col float-left w-full'>
        {menuList.map((item, index) => (
          <Link key={item.id} href={item.path} passHref>
            <div
              className={`flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-gray-500 ${
                activeIndex === index ? 'bg-blue-50 text-primary' : ''
              }`}
              onClick={() => {
                setActiveIndex(index);
                closeSideBar();
              }}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
