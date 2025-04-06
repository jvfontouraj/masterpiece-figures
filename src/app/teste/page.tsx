'use client'

// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from 'react'
// import { storage } from '@/utils/firebase'
// import Link from 'next/link'
// import Image from 'next/image'

export default function Teste() {
  // const [file, setFile] = useState<File | null>(null)
  // const [uploadProgress, setUploadProgress] = useState(0)
  // const [downloadUrl, setDownloadUrl] = useState('')

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     setFile(event.target.files[0])
  //   }
  // }

  // const handleUpload = () => {
  //   if (!file) return
  //   const fileRef = ref(storage, `files/${file.name}`)
  //   const uploadTask = uploadBytesResumable(fileRef, file)

  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       setUploadProgress(progress)
  //     },
  //     (error) => {
  //       console.error('Error uploading file:', error)
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
  //         setDownloadUrl(downloadUrl)
  //       })
  //     },
  //   )
  // }

  // const handleDownload = () => {
  //   if (downloadUrl) {
  //     const link = document.createElement('a')
  //     link.href = downloadUrl
  //     link.download = file?.name || ''
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //   }
  // }

  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)

  // Update progress bar when video plays
  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (video) {
      setProgress((video.currentTime / video.duration) * 100)
    }
  }

  // Handle user dragging the progress bar
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    const newTime = (parseFloat(e.target.value) / 100) * (video?.duration || 0)

    if (video) {
      video.currentTime = newTime
      setProgress(parseFloat(e.target.value))
    }
  }

  return (
    <main className="mt-40 flex w-full flex-col items-center justify-center gap-10 text-white">
      {/* <div>Teste</div>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      {downloadUrl && (
        <div>
          <p>Upload realizado</p>
          <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
            Download URL
          </Link>
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
      <Image
        src={
          'https://firebasestorage.googleapis.com/v0/b/masterpiece-figures-teste.firebasestorage.app/o/files%2Fimage00001.jpg?alt=media&token=5e942329-7e5d-49cc-8b15-1acbecec9748'
        }
        alt=""
        width={100}
        height={100}
      /> */}

      <div className="flex flex-col items-center gap-4 p-4">
        <video
          width="320"
          height="240"
          onTimeUpdate={handleTimeUpdate}
          ref={videoRef}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/masterpiece-figures-teste.firebasestorage.app/o/files%2FBatman%20Busto%201%20leve(1).mp4?alt=media&token=4edea0c9-8b02-4875-abce-df172ec46aa3"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Custom progress bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-full cursor-pointer"
        />
      </div>
    </main>
  )
}
