import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function DeniedPage() {
    const navigate=useNavigate();
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center '>
      <h1 className=' text-9xl font-extrabold tracking-widest'>
403

      </h1>
      <div className="px-2 text-lg bg-white rounded rotate-12 absolute">
        Access denied
      </div>
      <button  onClick={()=>navigate(-1)} className='mt-5'>
     
        <span className=' relative block px-8 py-3 border border-current'>
            Go Back
        </span>
      </button>
    </main>
  )
}
