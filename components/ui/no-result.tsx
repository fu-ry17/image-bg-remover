import React from 'react'

const NoResult = ({ title }: { title: string }) => {
  return (
    <div className='items-center flex justify-center w-full my-6'>
        <h3 className='text-muted-foreground'>{title}</h3>
    </div>
  )
}

export default NoResult