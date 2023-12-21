import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Fileinfo({ file }) {
  const [filetype, setFileType] = useState();

  useEffect(() => {
    if (file && file.filetype) {
      setFileType(file.filetype.split('/')[0].toLowerCase());
      console.log('filetype:', filetype);
  
      // Check if file.fileUrl is defined before logging
      if (file.fileUrl) {
        console.log('file.fileUrl:', file.fileUrl);
      }
    }
  }, [file]);
  
  return file && (
    <div className='text-center border
    flex justify-center m-4 flex-col items-center p-2 rounded-md
    border-blue-200'>
      <Image
          src={file.fileUrl}
          width={200}
          height={200}
          className='h-[200px] rounded-md object-contain'
        />
      <div className=''>
        <h2>{file.filename}</h2>
        <h2 className=' text-gray-400 text-[13px]'>{file.fileType}/ {file.fileSize}</h2>
      </div>
    </div>
  );
}
