// import{  React, useContext, useState } from 'react';
import React, { useState } from 'react';
import SignINbanner from './image/signin-banner.svg';
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdOutlineEmail } from "react-icons/md";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import { userContext } from '../App';

import { login } from '../Store/Slices/authen';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the fields");
      return;
    }

   

let res= await dispatch(login(loginData))
console.log(res)

if (res?.payload?.success) {
  toast.success("Login Successfull")
      navigate("/");
    }
    else{
      toast.error("Invalid Credentials")
    }

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
       <div className=" hidden md:w-full  md:flex">
        <div className="w-full h-screen bg-slate-50 ">
          <img className='' src={SignINbanner} alt="" />
        </div>
        <div className="w-full flex flex-col items-center mt-5 ">
          <div>
            <h1 className='text-3xl font-bold'>Learning_ADDA</h1>
          </div>

<div class="flex h-96 flex-col justify-center w-full px-6 py-12 lg:px-8">
  
<div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
<form class="space-y-3 w-full" action="#" method="POST" onSubmit={handleLogin}>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    <div class="mt-2">
      <input id="email" name="email" type="email"   value={loginData.email}
              onChange={handleUserInput} autocomplete="email" required class="block w-full text-2xl   p-3  font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  </div>

  <div>
    <div class="flex items-center justify-between">
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
      <div class="text-sm">
        
        <NavLink to={"/forgetpassword"} className=''>
            <p className="font-semibold text-indigo-600 hover:text-indigo-500"> Forget Password </p>
          </NavLink>
          
    
      </div>
    </div>
    <div class="mt-2">
      <input id="password" name="password" type="password" value={loginData.password}
              onChange={handleUserInput} autocomplete="current-password" required class="text-2xl   p-3  font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  </div>
  <p className="text-center"> Don't have an account ?{" "}
            <NavLink to={"/register"} className="link text-accent cursor-pointer"> Create Account </NavLink>
          </p>
  <div>
    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
  </div>
</form>


</div>
</div>
          
     </div>
     </div>

{/* responsive */}


<div className="w-full flex md:hidden">
        {/* <div className="w-full h-screen bg-slate-50 ">
          <img className='' src={SignINbanner} alt="" />
        </div> */}
        <div className="w-full h-screen flex flex-col items-center justify-center ">
          <div>
            <h1 className='text-3xl font-bold'>Learning_ADDA</h1>
          </div>

<div class="flex h-96 flex-col justify-center w-full px-6 py-12 lg:px-8">
  
<div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
<form class="space-y-3 w-full" action="#" method="POST" onSubmit={handleLogin}>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    <div class="mt-2">
      <input id="email" name="email" type="email"   value={loginData.email}
              onChange={handleUserInput} autocomplete="email" required class="block w-full text-xl   p-3  font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  </div>

  <div>
    <div class="flex items-center justify-between">
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
      <div class="text-sm">
        
        <NavLink to={"/forgetpassword"} className='' >
            <p className="font-semibold text-indigo-600 hover:text-indigo-500"> Forget Password </p>
          </NavLink>
          
    
      </div>
    </div>
    <div class="mt-2">
      <input id="password" name="password" type="password" value={loginData.password}
              onChange={handleUserInput} autocomplete="current-password" required class="text-xl   p-3  font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  </div>
  <p className="text-center"> Don't have an account ?{" "}
            <NavLink to={"/register"} className="link text-accent cursor-pointer"> Create Account </NavLink>
          </p>
  <div>
    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
  </div>
</form>


</div>
</div>
          
     </div>
     </div>
     
    </>
  )
}