import React, { useEffect } from 'react'
import DashBoard from './DashBoard'
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentDATA,activeUserDATA } from '../../Store/Slices/Admin';
import { getAllCourse } from '../../Store/Slices/CourseSlices';
import UserCard from './UserCard';



export default function UserDetails() {
  const dispatch=useDispatch()
  const {UserDetails,Courses} = useSelector((state) => state);
  const {ActiveDATA}=UserDetails;
  
  useEffect(() => {
    (async () => {
      await dispatch(getPaymentDATA());
      await dispatch(activeUserDATA());
      await dispatch(getAllCourse());
      console.log(UserDetails,Courses)

    })();
  }, []);


  return (
    <>

   <div className="flex">
   <DashBoard/>
   <div className=" w-full">
   {ActiveDATA[0]?.map((element) => {
            return <UserCard key={element._id} data={element} />;
          })}
   </div>
   </div>

    

    
   
    
    </>
        
      
  
  )
}
