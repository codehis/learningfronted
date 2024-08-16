import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {  useSelector } from 'react-redux';


export default function DashBoard() {
  const userData=useSelector((state)=>state.auth.data)
const [adminOption,setadminOption]=useState(true);

  return (
    <>
    
<div className=" hidden   md:ml-1 md:block"  >
  {
    adminOption ?
    <GiHamburgerMenu  className='text-3xl ml-5 cursor-pointer' onClick={()=>setadminOption(!adminOption)} />:
<RxCross2    className='text-3xl relative ml-20 z-10 cursor-pointer' onClick={()=>setadminOption(!adminOption)} />
  }
</div>
<div className={`hidden md:w-1/5  md:block  fixed bg-slate-300 duration-500    h-screen md:flex flex-col gap-20  text-white ${adminOption ? 'left-[-100%]  ':'left-0 '}`} >

<h1 className='mt-5 text-2xl font-semibold text-black'>Admin DashBoard</h1>
<ul className='flex flex-col p-5 gap-3 text-lg '>

<li className='flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
  <Link to='/DashBoard/Admin/userdetails' onClick={()=>setadminOption(!adminOption)}>User Details</Link>
</li>
<li className='flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
  <Link to='/DashBoard/Admin/Coresedetails'onClick={()=>setadminOption(!adminOption)}>Course Details</Link>
</li>
<li className='flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
  <Link to='/DashBoard/Admin/Paymentdetails' onClick={()=>setadminOption(!adminOption)}>Payment Details</Link>
</li>

</ul>






</div>

    

{/* responsive  */}

<div className=" ml-1 md:hidden "  >
  {
    adminOption ?
    <GiHamburgerMenu  className='text-3xl  cursor-pointer' onClick={()=>setadminOption(!adminOption)} />:
<RxCross2    className='text-3xl relative left-32 z-10 cursor-pointer' onClick={()=>setadminOption(!adminOption)} />
  }
</div>

<div className={` w-1/2   fixed bg-slate-300 duration-500    h-screen flex flex-col gap-20  text-white ${adminOption ? 'left-[-100%]  ':'left-0 '} md:hidden`} >

<h1 className='mt-5 text-2xl font-semibold text-black'>Admin DashBoard</h1>
<ul className='flex flex-col p-5 gap-3 text-lg '>

<li className='flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
  <Link to='/DashBoard/Admin/userdetails' onClick={()=>setadminOption(!adminOption)}>User Details</Link>
</li>
<li className='flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
  <Link to='/DashBoard/Admin/Coresedetails' onClick={()=>setadminOption(!adminOption)}>Course Details</Link>
</li>
<li className='flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
  <Link to='/DashBoard/Admin/Paymentdetails' onClick={()=>setadminOption(!adminOption)}>Payment Details</Link>
</li>

</ul>






</div>

    

    </>
  )
}
