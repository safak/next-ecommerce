import React from 'react'
import Image from 'next/image'

const Items = () => {
  return (
    <div className='flex gap-4 xl:gap-6 items-center '>
<Image src='/profile.png' alt=''width={22} height={22} className='cursor-pointer'/>
<Image src='/notification.png' alt=''width={22} height={22} className='cursor-pointer'/>
<Image src='/cart.png' alt=''width={22} height={22} className='cursor-pointer'/>
    </div>
  )
}

export default Items