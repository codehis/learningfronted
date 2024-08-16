import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EditProfile from './EditProfile'



export default function Profie() {
    const userData=useSelector((state)=>state.auth.data)
    
useEffect(()=>{
console.log(userData)
},[])

  return (
    
    <div className="min-h-[90vh]  flex items-center justify-center">
    <div className="my-10 flex flex-col gap-4 rounded-lg p-4  w-100 shadow-[0_0_10px_black]">
      <img
        className="w-40 h-40 m-auto rounded-full border border-black"
        src={userData?.avatar}
        alt="user profile image"
      />

      <h3 className="text-xl font-semibold text-center capitalize">
        {userData.name}
      </h3>

      <div className="grid grid-cols-2">
        <p>Email :</p>
        <p>{userData?.email}</p>
        <p>Role :</p>
        <p>{userData?.role}</p>
        <p>Subscription :</p>
        <p>
          {userData?.subscription?.status === "active"
            ? "Active"
            : "Inactive"}
        </p>
      </div>

      {/* button to change the password */}
      <div className="flex items-center justify-between gap-2">
         <Link
          to={
            userData?.email === "test@gmail.com"
              ? "/denied"
              : "/changepassword"
          } 
          className="w-1/2 rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  cursor-pointer text-center"
        >
          <button>Change Password</button>
        </Link> 

        <Link
          to={
            userData?.email === "test@gmail.com"
              ? "/denied"
              : "/user/editprofile"
          }
          className="w-1/2 rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  cursor-pointer text-center"
        >
          <button>Edit Profile</button>
        </Link>
      </div>

      {userData?.subscription?.status === "active" && (
        <button
        //   onClick={handleCourseCancelSubscription}
          className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center"
        >
          Cancel Subscription
        </button>
      )}
    </div>
  </div>
  )
}
