import React from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { courseDelete, getAllCourse } from '../../Store/Slices/CourseSlices';
import toast from 'react-hot-toast';



export default function CoCard({data}) {
  const dispatch=useDispatch();
  const updateInput=(async()=>{
await dispatch(courseDelete(data._id))
 await dispatch(getAllCourse())

  toast.success("Course Deleted")
 

  })

  const navigate=useNavigate();
  return (
    <>
    
       <div >
       
      <div class="container mx-auto">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">category</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">numberOfLectures</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">createdBy</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {/* <!-- Replace this with your actual data --> */}
        <tr className='cursor-pointer' >
          <td class="px-6 py-4 w-36  " onClick={() => navigate("/CoursePage/discription", { state: { ...data } })}>
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full " src={data.thumbnail.
secure_url} alt=""/>
            </div>
          </td>
          <td class="px-6 py-4 w-36 ">
            <div class="text-sm   font-medium text-gray-900">{data.title}</div>
          </td>
          <td class="px-6 py-4 w-36  ">
            <div class="text-sm text-gray-900">{data.category}</div>
          </td>
          <td class="px-6 py-4 w-36  ">
            <div class="text-sm text-gray-900">{data.numberOfLectures}</div>
          </td>
          <td class="px-6 py-4 w-36  ">
            <div class="text-sm text-gray-900">{data.createdBy}</div>
          </td>
          <td class="px-6 py-4 w-36 ">
            <span onClick={updateInput} class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delete</span>
    
          </td>
        </tr>
        {/* <!-- Add more rows for additional data --> */}
      </tbody>
    </table>
  </div>
</div>

    </div>

    </>
  )
}
