"use client"
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Button } from './button'

const Download = ({ image}: { image: string }) => {
    const [load, setLoad] = useState<boolean>(false)

    const downloadImage = () => {
        setLoad(true)
        const link = document.createElement('a');
        link.href = image as string;
        link.download = `${uuid()}.png`;  // unique id for every image
        
        // Programmatically click the anchor element to start download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setLoad(false)
    };
  
  return (
    <Button disabled={load} onClick={downloadImage} className='w-full'> Download </Button>
  )
}

export default Download