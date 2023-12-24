import { Download } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function FileItem({ file }) {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleDownload = () => {
    if (!file?.password || file.password === password) {
      setIsPasswordCorrect(true);
      window.open(file?.fileUrl);
    } else {
      setIsPasswordCorrect(false);
    }
  };

  return file && (
    <div className="w-100 bg-white p-6 rounded-lg shadow-md">
      <div className="text-center text-2xl font-bold text-blue-600">
        <strong className=' text-primary'>{file.userName}</strong> Shared the file with You
      </div>
      <div className="text-center text-sm text-gray-500 mt-1">
        Find File details below
      </div>

      <div className="flex flex-col items-center py-4">
         <Image
         src='/download-file.gif' width={100} height={100}
         />
        <div className="text-center text-sm text-gray-700 mt-4">
          <span className="font-medium">{file.filename}</span>
          <span className="text-yellow-500">⚡</span>
          <span>{file.fileType}</span>
          <span className="text-yellow-500">⚡</span>
          <span>{file.fileSize} Bytes</span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        {file?.password?.length > 3 &&
          <input
            className={`border p-2 w-full rounded-md text-[14px] mt-5 text-center outline-blue-400 ${!isPasswordCorrect ? 'border-red-500' : ''}`}
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        }
        <button
          className="w-full flex gap-2 bg-primary text-white p-2 mt-5 text-center justify-center
          rounded-full items-center hover:bg-blue-600 text-[14px]"
          onClick={handleDownload}
        >
          <Download className='h-4 w-4'/> Download
        </button>
        {!isPasswordCorrect && (
          <p className="text-xs text-red-500 mt-2">
            Incorrect password. Please try again.
          </p>
        )}
        <p className="text-xs text-gray-500 mt-2">
          *Terms and Conditions apply
        </p>
      </div>
    </div>
  );
}
