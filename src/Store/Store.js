import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./Slices/CourseSlices";
import authSlice from './Slices/authen';
import razorpay from './Slices/Payment';
import lecture from './Slices/LectureSlices'
import DataForAdmin from "./Slices/Admin";



const store = configureStore({
  reducer: {
    auth: authSlice,
    Courses: CourseSlice,
    razorPayment:razorpay,
    lecture:lecture,
   UserDetails:DataForAdmin
  }
  
  
});


export default store;