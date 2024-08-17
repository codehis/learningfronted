// import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../helper/axiosInstace";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState={
    CourseDate:[]
}

export const getAllCourse = createAsyncThunk("getAllCourse", async () => {
  try {
   const res=await axiosInstance.get('/courses/getAllCourse')

    const response = await res;
   
    return response.data.Courses;
    
  } catch (error) {
    toast.error(error);
    console.log("error",error)
  }
});


// asyncThunk require sting and callback function it should be return promises or action creator
export const courseDelete=createAsyncThunk('/DeleteCurrent Course',async(id)=>{
  try{
    // call api though axios 
    const res=axiosInstance.delete(`/courses/courseDelete/${id}`,)
  const response = await res;
  console.log(response)
      return response.data;

  }
  catch(error){
    toast.error(error?.response?.data?.message);
    
  }
})

export const createNewCourse = createAsyncThunk(
  "/get/courses",
  async (data) => {
    try {
      // creating the form data from user data
      let formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("category", data?.category);
      formData.append("createdBy", data?.createdBy);
      formData.append("thumbnail", data?.thumbnail);

      const res = axiosInstance.post("/courses/createCourse", formData);

      // toast.promise(res, {
      //   loading: "Creating the course...",
      //   success: "Course created successfully",
      //   error: "Failed to create course",
      // });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const CourseSlice=createSlice({
    name:"Courses",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
      builder.addCase(getAllCourse.fulfilled, (state, action) => {
        if(action.payload){
          
          state.CourseDate = [action.payload]
          
          
          
          
        }

      
        
           
         
      });
   
    }
})



export const {} = CourseSlice.actions;
export default CourseSlice.reducer;
