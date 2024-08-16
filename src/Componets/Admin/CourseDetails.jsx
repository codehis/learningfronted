import React, { useEffect } from 'react'
import { getAllCourse } from '../../Store/Slices/CourseSlices';
import CoCard from './CoCard';
import { useDispatch, useSelector } from 'react-redux';
import DashBoard from './DashBoard';
import { Link } from 'react-router-dom';



export default function CourseDetails() {
    const dispatch=useDispatch()
    const {CourseDate}  = useSelector((state) => state.Courses);

    useEffect(() => {
        (async () => {
        //   await dispatch(getPaymentDATA());
        //   await dispatch(activeUserDATA());
          await dispatch(getAllCourse());
          console.log(CourseDate[0])
    
        })();
      }, []);


  return (
    <>
    <div className="flex ">
   <DashBoard/>
   
   <div className="p-10 w-full">
   <div className='flex justify-end mb-4 '>
    <Link to='/CreateCourse'>
    
    <button type="submit" className="flex w-3/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create New Course</button>
    </Link>
    </div>
   {CourseDate[0]?.map((element) => {
            return <CoCard key={element._id} data={element} />;
          })}
   </div>
   </div>
      
    </>
  )
}
