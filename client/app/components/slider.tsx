import { useState } from 'react'
import Image from 'next/image'
import Elon from '../../public/Elon.jpg'


function slider() {
  return (
    <>
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>

    <Image
        src={Elon}
        alt="Picture of the author"
        width={400}
        height={400}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      />
    </div>

    </>
  )
}
 
export default slider