import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { Copy } from 'lucide-react';
import React, { useState } from 'react';

export default function FileShareForm({ file, onPasswordSave }) {
  console.log('File Object:', file);
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState('');
  const { user } = useUser();
  const [email, setEmail] = useState('');
  console.log('User Object:', user);

  const sendEmail = async () => {
    try {
      const data = {
        emailToSend: email,
        filename: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        userName: user?.fullName,
        shortUrl: file?.shortUrl
      };
  
      console.log('Data to be sent:', data);
  
      if (data.emailToSend) {
        const emailTo = data.emailToSend.split("@")[0];
        const res = await GlobalApi.SendEmail({ ...data, emailTo });
        console.log('Email sending response:', res);

        window.alert('Email sent successfully!');
      } else {
        console.error("Email data is incomplete");
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  }
  
  const onCopyClick =() =>{
    navigator.clipboard.writeText(file.shortUrl);
  }

  return file && (
    <div className='flex flex-col gap-2'>
      <div>
        <label className='text-[14px] text-gray-500'>Short Url</label>
        <div className='flex gap-5 p-2 border rounded-md justify-center w-full'>
          <input
            type='text'
            value={file.shortUrl} 
            disabled
            className='disabled:text-gray-500 bg-transparent outline-none'
          />
          <Copy className='text-gray-400 hover:text-gray-600' onClick={() => onCopyClick()} />
        </div>
      </div>
      <div className='gap-3 flex mt-5'>
        <input
          type='checkbox'
          onChange={(e) => setIsEnablePassword(e.target.checked)}
        />
        <label>Enable Password</label>
      </div>

      {isPasswordEnable ? (
        <div className='flex gap-3 items-center'>
          <div className='border rounded-md w-full p-2'>
            <input
              type='password'
              className='disabled:text-gray-500 bg-transparent outline-none'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600'
            disabled={password?.length < 3}
            onClick={() => onPasswordSave(password)}
          >
            Save
          </button>
        </div>
      ) : null}

      <div className=' border rounded-md pt-3 mt-5 p-3'>
        <label className=' text-[14px] text-gray-500 p-2'> Send File to Email</label>
        <div className=' border rounded-md p-2 m-2'>
          <input
            type='email'
            placeholder='example@gmail.com'
            className='bg-transparent outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
        </div>
        <button
          className='border p-2 m-2 disabled:bg-gray-300 bg-primary text-white hover:bg-blue-600 w-full rounded-md'
          onClick={() => sendEmail()}
        >
          Send Email
        </button>
      </div>
    </div>
  );
}
