import React, { useState } from 'react'
import SignINbanner from './image/signin-banner.svg'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
// import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAccount } from '../Store/Slices/authen';
import { NavLink } from 'react-router-dom';
import {toast} from 'react-hot-toast';
// import { all } from 'axios';

export default function SignUPpage() {
const dispatch=useDispatch();
  const navigate = useNavigate();
  
  const[iamge,setImage]=useState('')
  const[Name,setName]=useState('')
  const[UserName,setUserName]=useState('')
  const[password,setPassword]=useState('')


  const getImage=(e)=>{
const ImageUpload=e.target.files[0];
const fileReader=new FileReader();
fileReader.readAsDataURL(ImageUpload);
fileReader.addEventListener("load",function(){
  setImage(this.result)
})
  }

const SubmitData=async(e)=>{
  e.preventDefault();
  
if(!Name || !UserName || !password  || !iamge){
  toast.error("Please Enter All Credential")
  return;
}



const alldata={
 
  name:Name,
  email:UserName,
  password :password,
  avatar :iamge

}

// calling create account action
 const res=await dispatch(createAccount(alldata));
console.log(res);

setImage('')
setName('')
setUserName('')
setPassword('')
if (res.payload.success){
  toast.success("User Register!")
  navigate("/Login");
}
else{
  toast.error("User Not Register")
}
 





       












 
}
  


  return (
   <>
    <ToastContainer />
   <div className="hidden  md:w-full   md:flex">
    
<div className="w-full h-screen bg-slate-50 ">
  <img className='h-screen ' src={SignINbanner} alt="" />
</div>
<div className="w-full flex flex-col items-center ">
  <div className="">
    <h1 className='text-3xl font-bold'>Learning_ADDA</h1>
  </div>
  
  <div className="mt-3">
    <p className='text-xl'>Please enter your Details to Register Yourself !</p>
  </div>
  

<div class="flex h-96 flex-col mt-5 w-full justify-center px-6 py-12 lg:px-8">
  
  <div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-3" action="#" method="POST" onSubmit={SubmitData}>
  <label htmlFor="image_uploads" className='cursor-pointer'>


   
{
   iamge?(
     <img className='w-28 h-28 rounded-full m-auto' src={iamge}/>
   ):(
     <BsPersonCircle className='w-28 h-28 rounded-full m-auto'/>
   )
 }
 </label>

 <input className='hidden ' type="file" name='image_uploads' id='image_uploads' onChange={getImage} />
   
   
   
    <div>
      <label for="name"class="block text-sm font-medium leading-6 text-gray-900">Name</label>
      <div class="">
        <input id="name" name="Name" type="text"   onChange={(e)=>setName(e.target.value)} value={Name} autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-2xl   p-3  font-semibold"/>
      </div>
    </div>
  
    <div>
      <div class="flex items-center justify-between">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900" >Email</label>
        <div class="text-sm">
            </div>
      </div>
      <div class="">
        <input id="email" name="email" type="email"  onChange={(e)=>setUserName(e.target.value)} value={UserName} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-2xl   p-3  font-semibold sm:leading-6"/>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >Password</label>
        <div class="text-sm">
            </div>
      </div>
      <div class="">
        <input id="password" name="password" type="password" autocomplete="current-password"  onChange={(e)=>setPassword(e.target.value)} value={password} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-2xl   font-semibold  p-3 "/>
      </div>
    </div>
    <p className="text-center"> You have an account ?{" "}
              <NavLink to={"/Login"} className="link text-accent cursor-pointer">Login Account </NavLink>
            </p>
    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
    </div>
  </form>
  
  
  </div>
  </div>
</div>

</div>




   {/* responsive  */}

   <ToastContainer />
   <div className="w-full   flex md:hidden">
    

<div className="w-full gap-6 h-screen flex flex-col items-center justify-center ">
  <div className="">
    <h1 className='text-3xl font-bold'>Learning_ADDA</h1>
  </div>
  
  <div className="">
    <p className='text-xl'>Please enter your Details to Register Yourself !</p>
  </div>
  

<div class="flex h-96 flex-col mt-5 w-full justify-center px-6 py-12 lg:px-8">
  
  <div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-3" action="#" method="POST" onSubmit={SubmitData}>
  <label htmlFor="image_uploads" className='cursor-pointer'>


   
{
   iamge?(
     <img className='w-28 h-28 rounded-full m-auto' src={iamge}/>
   ):(
     <BsPersonCircle className='w-28 h-28 rounded-full m-auto'/>
   )
 }
 </label>

 <input className='hidden ' type="file" name='image_uploads' id='image_uploads' onChange={getImage} />
   
   
   
    <div>
      <label for="name"class="block text-sm font-medium leading-6 text-gray-900">Name</label>
      <div class="">
        <input id="name" name="Name" type="text"   onChange={(e)=>setName(e.target.value)} value={Name} autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-xl   p-3  font-semibold"/>
      </div>
    </div>
  
    <div>
      <div class="flex items-center justify-between">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900" >Email</label>
        <div class="text-sm">
            </div>
      </div>
      <div class="">
        <input id="email" name="email" type="email"  onChange={(e)=>setUserName(e.target.value)} value={UserName} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-xl   p-3  font-semibold sm:leading-6"/>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >Password</label>
        <div class="text-sm">
            </div>
      </div>
      <div class="">
        <input id="password" name="password" type="password" autocomplete="current-password"  onChange={(e)=>setPassword(e.target.value)} value={password} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-xl   font-semibold  p-3 "/>
      </div>
    </div>
    <p className="text-center"> You have an account ?{" "}
              <NavLink to={"/Login"} className="link text-accent cursor-pointer">Login Account </NavLink>
            </p>
    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
    </div>
  </form>
  
  
  </div>
  </div>
</div>

</div>




   

   
   </>
  
    
  )
}
