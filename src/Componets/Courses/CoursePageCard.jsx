import React from 'react'
import CourseOne from '../image/courseOne.png'
import { IoMdPerson } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';




export default function CoursePageCard({data}) {
 const navigate=useNavigate()
  return (

   
  <>
   <div
      onClick={() => navigate("/CoursePage/discription", { state: { ...data } })}
      className=" w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-white drop-shadow-500"
    >
      <div className="overflow-hidden">
        <img
          className="h-48 w-full rounded-tl-lg rounded-tr-lg  group-hover:scale-[1.2]  transition-all ease-in-out duration-300  "
          src={data.thumbnail.secure_url}
          alt="course thumbnail"
        />
      </div>

      {/* course details */}
      <div className="p-3 space-y-1 ">
        <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
          {data?.title}
        </h2>
        <p className="line-clamp-2">{data?.discription}</p>
        <p className="font-semibold">
          <span className="text-yellow-500 font-bold">Category : </span>
          {data?.category}
        </p>
        <p className="font-semibold">
          <span className="text-yellow-500 font-bold">Total Price : </span>
          {data?.Price}
        </p>
        <p className="font-semibold">
          <span className="text-yellow-500 font-bold">Instructor : </span>
          {data?.createdBy}
        </p>
      </div>
      {/* <div className=" flex m-3 p-4 justify-space space-x-20">
      <div className='w-full'>
      <button  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore</button>
    </div >
    <div className='w-full'>
      <button  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrole</button>
    </div>
      </div> */}
    </div>
  
  
  
  
  </>
   
   
  )
}



