import React from 'react'
import Static1 from './image/statistics1.png'

export default function SecondHomeCard(props) {
  return (
   <>
    <div className='hidden rounded-md w-1/5 p-4 bg-white drop-shadow-2xl  m-4 md:flex justify-start'>
        <div className="w-1/3">
            <img src={props.img} alt="" />
        </div>
        <div className="">
            
        <h1 className='font-semibold text-lg'>{props.title}</h1>
        <p1>{props.para}</p1>
            </div>      
    </div>

    {/* responsive  */}

    <div className=' rounded-md w-80 p-4 bg-white drop-shadow-2xl  m-4 flex justify-start md:hidden'>
        <div className="w-1/3">
            <img src={props.img} alt="" />
        </div>
        <div className="">
            
        <h1 className='font-semibold text-lg'>{props.title}</h1>
        <p1>{props.para}</p1>
            </div>      
    </div>
   
   
   
   
   
   
   </>
  )
}
