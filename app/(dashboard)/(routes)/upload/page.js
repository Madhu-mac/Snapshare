"use client"
import React , {useState} from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";


export default function Upload() {
  const [progress, setProgress] = useState();
  const storage = getStorage(app)
  const uploadFile=(file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/'+ file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(progress)
    progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  },
  (error) =>{
    console.log("Error during upload", error)
  },
  () => {
    console.log('Uploaded completed successfully')
  })
}
  return (
    <div className=' p-5 px-8 md:px-28 text-center'>
      <h2 className=' text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading </strong>
       File and  <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm uploadBtn={(file) => uploadFile(file)}
      progress={progress}/>
    </div>
  )
}
