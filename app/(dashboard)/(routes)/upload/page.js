"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utils/GenerateRandomString';
import CompleteCheck from './_components/CompleteCheck';
import { useRouter } from 'next/navigation';

const storage = getStorage(app);
const db = getFirestore(app);

export default function Upload() {

  const { user } = useUser();
  const [progress, setProgress] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const router = useRouter()
  const [fileDocId, setFileDocId] = useState()
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);

        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            saveInfo(file, downloadURL);
          });

        }
      },
      (error) => {
        console.log("Error during upload", error);
      });

    const saveInfo = async (file, fileUrl) => {
      const docId = generateRandomString().toString();

      try {
        await setDoc(doc(db, "uploadedFile", docId), {
          filename: file?.name,
          fileSize: file?.size,
          fileType: file?.type,
          fileUrl: fileUrl,
          userEmail: user?.primaryEmailAddress.emailAddress,
          username: user?.fullName,
          password: '',
          id: docId,
          shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "f/" +docId
        });
        console.log("Document successfully written!");
        setFileDocId(docId)
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    }
  }
  useEffect(() => {
    console.log("Trigger");
    if (progress === 100) {
      setTimeout(() => {
        setUploadCompleted(true);
      }, 2000);
    }
  }, [progress]);

  useEffect(() => {
    if (uploadCompleted) {
      setTimeout(() => {
        setUploadCompleted(false);
        router.push('/file-preview/' + fileDocId)
      }, 2000);
    }
  }, [uploadCompleted]);
  return (
    <div className=' p-5 px-8 md:px-28 text-center'>
      {!uploadCompleted ? <div>
        <h2 className=' text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading </strong>
          File and  <strong className='text-primary'>Share</strong> it</h2>
        <UploadForm uploadBtn={(file) => uploadFile(file)}
          progress={progress} />
      </div> :
        <CompleteCheck />}
    </div>
  )
}
