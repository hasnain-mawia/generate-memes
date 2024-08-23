import Link from 'next/link';
import React from 'react'

function Index() {
  return (
    <div className='h-screen bg-[#e7e7e7] flex flex-col justify-center items-center '>
       <h2 className='text-[30px] sm:text-[160px] font-bold'>Oops!</h2> 
       <h4 className='text-[30px] sm:text-[24px]'>404 - PAGE NOT FOUND</h4>
       <Link href={'/'} className='bg-[#0088ff] p-2 rounded-[30px] text-white' >GO BACK TO HOME</Link>
    </div>
  )
}

export default Index