import React, { useState } from 'react'
import SignINbanner from '../Componets/image/signin-banner.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

    
      
    
  return (
    
   <>
   
   <div>
      <ToastContainer />
        <div className="hidden  md:w-full    md:flex ">
    
    <div className="w-full h-screen bg-slate-50 ">
      <img className='h-screen ' src={SignINbanner} alt="" />
    </div>
    <div className="w-full flex flex-col items-center mt-20 ">
      
      <div class="flex h-96 flex-col w-full justify-center py-12 lg:px-8">
  <h1 className='text-center font-bold text-3xl'>Contact Us</h1>
  <div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
  <form class=" w-full space-y-4" action="#" method="POST"  >
    <div className='w-full '>
      <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
      <div class="w-full">
        <input id="name" name="name" type="text"    autocomplete="email" required class="block w-full text-2xl   p-3  font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
  
    <div>
      <div class="flex items-center justify-between">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
       
      </div>
      <div class="">
        <input id="email" name="email" type="email" required class="block w-full rounded-md border-0 py-1.5 text-2xl   p-3  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
       
      </div>
      <div class="">

     <textarea name="message"  id="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 text-2xl   p-3  font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" cols="30" rows="5"></textarea>
      </div>
    </div>
    <div>
      <button type="submit" class="flex mt-4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
    </div>
  </form>
  
  
  </div>
  </div>
      </div>
  
       </div>
       
    </div>

{/* responsive  */}
<div>
      <ToastContainer />
        <div className="w-full   flex md:hidden">
    
    
    <div className="w-full flex flex-col items-center mt-20 ">
      
      <div class="flex h-96 flex-col w-full justify-center py-12 ">
  <h1 className='text-center font-bold text-3xl'>Contact Us</h1>
  <div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
  <form class=" w-full space-y-4 p-8" action="#" method="POST"  >
    <div className='w-full '>
      <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
      <div class="w-full">
        <input id="name" name="name" type="text"    autocomplete="email" required class="block w-full text-2xl   p-3  font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
  
    <div>
      <div class="flex items-center justify-between">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
       
      </div>
      <div class="">
        <input id="email" name="email" type="email" required class="block w-full rounded-md border-0 py-1.5 text-2xl   p-3  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
       
      </div>
      <div class="">

     <textarea name="message"  id="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 text-2xl   p-3  font-semibold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" cols="30" rows="5"></textarea>
      </div>
    </div>
    <div>
      <button type="submit" class="flex mt-4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
    </div>
  </form>
  
  
  </div>
  </div>
      </div>
  
       </div>
       
    </div>

   
   </>
   
   
   )
}
