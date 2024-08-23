import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-[#0b0b0b] py-4 text-white sticky top-0'>
        <div className='max-w-[80%] mx-auto flex items-center justify-center gap-3'>
            <Image src="/Memes.png" alt="" width={60} height={60}/>
            <h2 className='text-[22px] text-center font-bold'>Meme Savage</h2>
             <span className='w-[20px] h-[20px] rounded-[30px] bg-[#FCDA06]'>&nbsp;</span>   
        </div>
      
    </div>
  )
}

export default Header
