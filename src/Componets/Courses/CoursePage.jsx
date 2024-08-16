import React from 'react'
import CourseBanner from '../image/courseOne.png'
import { IoMdPerson } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse } from '../../Store/Slices/CourseSlices';
import CoursePageCard from './CoursePageCard';
import Footer from '../Footer';



export default function CoursePage() {

  const dispatch = useDispatch();
  const {CourseDate}  = useSelector((state) => state.Courses);
  

console.log(CourseDate[0])



 
useEffect(() => {
  (async () => {
    await dispatch(getAllCourse());
  })();
}, []);


  

  const Navigate=useNavigate();

  
  return (
   




<>


<div className="md:min-h-[90vh] pt-12 pl-20 md:flex flex-col flex-wrap md:gap-10 hidden ">
        <h1 className="text-center  text-3xl font-semibold">
          Explore the courses made by{" "}
          <span className="font-bold text-yellow-500  ">Industry Experts</span>
        </h1>

        {/* wrapper for courses card */}
        <div className="mb-10 flex flex-wrap gap-14">
          {CourseDate[0] ?.map((element) => {
            return <CoursePageCard key={element._id} data={element} />;
          })}
        </div>
  {/* <Footer/> */}
  </div>
{/* // </Slider> */}
{/* // </div> */}
{/* // responsive  */}

<div className=" min-h-[90vh] w-full pt-12 flex flex-col  items-center flex-wrap gap-10  md:hidden  ">
<h1 className="text-center w-full text-3xl font-semibold ">
  Explore the courses made by{" "}
  <span className="font-bold text-yellow-500  ">Industry Experts</span>
</h1>

{/* wrapper for courses card */}
<div className="mb-10 flex w-full justify-center flex-wrap gap-14 ">
  {CourseDate[0] ?.map((element) => {
    return <CoursePageCard key={element._id} data={element} />;
  })}
</div>
{/* <Footer/> */}
</div>

</>




  )
}

