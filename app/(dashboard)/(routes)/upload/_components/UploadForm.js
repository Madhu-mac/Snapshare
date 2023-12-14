"use client"
import React, { useState } from 'react'
import Alert from './Alert';
import Filepreview from './Filepreview';

export default function UploadForm({uploadBtn}) {
  const [file , setFile] = useState();
  const [errormsg, setErrormsg]= useState();
  const onFileSelect =(file) =>{
    console.log(file)
    if(file && file.size> 2000000){
      console.log("size is greater then 2MB")
      setErrormsg('Max file Size is 2mb')
      return;
    }
    setErrormsg(null)
    setFile(file)
  }
  return (
    <div className=' text-center'>
    <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2
         border-blue-800 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800  hover:bg-gray-100   dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-12 h-12 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-lg md:text-2xl text-blue-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or <strong className=' text-primary'>drag </strong>and <strong className=' text-primary'>drop</strong></p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX SIZE: 2MB)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" 
            onChange={(event) =>onFileSelect(event.target.files[0])}/>
        </label>
    </div> 
    {errormsg ?<Alert msg={errormsg}/>: null}
    {file ?<Filepreview file={file} removeFile={() => setFile(null)}/>: null}
    <button disabled={!file} className=' p-2 bg-primary text-white
    w-[30%] rounded-full mt-5 disabled:bg-gray-400'
     onClick={ async () => uploadBtn(file)}>Upload</button>
    </div>
  )
}
