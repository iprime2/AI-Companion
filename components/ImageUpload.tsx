'use client'

import { FC, useEffect, useState } from 'react'
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'

interface ImageUploadProps {
  value: string
  onChange: (src: string) => void
  disabled?: boolean
}

const ImageUpload: FC<ImageUploadProps> = ({ value, onChange, disabled }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) return null

  return (
    <div className='space-y-4 w-full flex flex-start justify-center items-center'>
      <CldUploadButton
        options={{
          maxFiles: 1,
        }}
        uploadPreset='ai-companion'
      >
        <div className='p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center'>
          <Image
            fill
            alt='Upload'
            src='/placeholder.svg'
            className='rounded-lg object-cover'
          />
        </div>
      </CldUploadButton>
    </div>
  )
}

export default ImageUpload
