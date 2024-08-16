import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { updateData } from '../Store/Slices/authen';
import {getUserDetails} from '../Store/Slices/authen'
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";

export default function EditProfile() {
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const[previewImage,setPreviewImage]=useState()

const [Data,setData]=useState({
    name:"",
    avatar:"",
    id:useSelector((state)=> state?.auth?.data?._id),
  
})
const handleImageUpload=((e)=>{


const uploadImage=e.target.files[0];


if(uploadImage){
 
    const fileReader=new FileReader();
    fileReader.readAsDataURL(uploadImage);
    fileReader.addEventListener("load",function(){
        setData({
            ...Data,
            avatar: uploadImage,
          });
       setPreviewImage(this.result)
      //  console.log(previewImage)
       
    })
}

})

const handleInput=((e)=>{
   
    const {name,value}=e.target;
    setData({
        ...Data,
        [name]:value
       
    })
})

const Onsubmit=(async(e)=>{
    e.preventDefault();
    console.log(Data.name,Data.avatar)
    if(!Data.name || !Data.avatar){
        toast.error("all fields are mandatory")
    }

    const alldata={
      name:Data.name,
      avatar:previewImage,
    id:Data.id
    }
    // const newUserData = [Data.id,alldata];
    // console.log(newUserData)

await dispatch(updateData(alldata))
await dispatch(getUserDetails());
 
 
navigate('/user/profile')


})

  return (
    <div className="flex h-96 flex-col mt-5 w-full justify-center px-6 py-12 lg:px-8">
  
  <div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-3"  onSubmit={Onsubmit} >
  
  <label htmlFor="image_uploads" className='cursor-pointer'>


   
{
   previewImage?(
     <img className='w-28 h-28 rounded-full m-auto' src={previewImage}/>
   ):(
     <BsPersonCircle className='w-28 h-28 rounded-full m-auto'/>
   )
 }
 </label>

 <input className='hidden ' onChange={handleImageUpload} type="file" name='image_uploads' id='image_uploads'/>
   
   
   
    <div>
      <label htmlFor="name"className="block text-sm font-medium leading-6 text-gray-900">Name</label>
      <div class="">
        <input id="name" name="name" type="text" onChange={handleInput} value={Data.name}  autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-2xl   p-3  font-semibold"/>
      </div>
    </div>
  
    
    
      
    
    <div>
      <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
    </div>
    <div>
     <Link to='/user/profile'>
     <button   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go Back to Pofile</button>
     </Link>
    </div>
  </form>
  
  
  </div>
  </div>
  )
}
