import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../helper/axiosInstace";
import toast from "react-hot-toast";
import axios from "axios";


const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  data: JSON.parse(localStorage.getItem("data") )|| {"name":"kareem"},
  role: localStorage.getItem("role") || "",
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    let res = await axiosInstance.post("/user/createUser", data); // Added await here
    // toast.promise(res, {
    //   loading: "Wait! Creating your account",
    //   success: (data) => {
    //     return data?.data?.message;
    //   },
    //   error: "Failed to create account",
    // });
    return res.data; // Return the data from the response
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error; // Rethrow the error to propagate it to the rejected state
  }
});

export const login = createAsyncThunk("/login", async (data) => {
  try {
    let res = await axiosInstance.post("/user/login", data); // Added await here
    
// await toast.promise(res, {
//       loading: "Loading...",
//       success: (data) => {
//         return data?.data?.message;
//       },
//       error: "Failed to log in",
//     });
    return res.data; // Return the data from the response
  } catch (error) {
    toast.error(error.message);
    throw error; // Rethrow the error to propagate it to the rejected state
  }
});


export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    let res = axiosInstance.post("/user/logout");

    // await toast.promise(res, {
    //   loading: "Loading...",
    //   success: (data) => {
    //     return data?.data?.message;
    //   },
    //   error: "Failed to log out",
    // });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

   
export const updateData = createAsyncThunk("auth/update", async (data) => {
  try {
   
    let res = axiosInstance.put('/user/updateProfile',data);

    // await toast.promise(res, {
    //   loading: "Loading...",
    //   success: (data) => {
    //     return data?.data?.message;
    //   },
    //   error: "Failed to log out",
    // });

    // getting response resolved here
    res = await res;
    console.log(res)
    return res.data;
    
  } catch (error) {
    toast.error(error.message);
  }
});
  
export const getUserDetails = createAsyncThunk("/userDetails", async () => {
  try {
    let res = axiosInstance.get('/user/userDetails');
    return res?.data;
    
  
    
  } catch (error) {
    toast.error(error.message);
  }
});

// export const DoforgetPassword=createAsyncThunk('/forgetPassword',async(data)=>{
//  console.log(data)
//   try{
// let res=axiosInstance.post('/user/forgetPasswrod',data)
// return res?.data;
// console.log(res.data)

//   }
//   catch(err){
//     console.log(err)
//   }
// })
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action) => {
          localStorage.setItem("data", JSON.stringify(action?.payload?.user));
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("role", action?.payload?.user?.role);
          state.isLoggedIn = true;
          state.data = action?.payload?.user;
          state.role = action?.payload?.user?.role;
        })
        .addCase(logout.fulfilled, (state) => {
          localStorage.clear();
          state.isLoggedIn = false;
          state.data = {};
        })
       
        
         .addCase(getUserDetails.fulfilled, (state, action) => {
          console.log(state,action)
          localStorage.setItem("data", JSON.stringify(action?.payload?.userLogin));
          localStorage.setItem("isLoggedIn", true);
          state.isLoggedIn = true;
          state.data = action?.payload?.userLogin;
          state.role = action?.payload?.userLogin?.role;
          console.log(state)
        });
      
       
    }
 
    
  });
  
  export const {} = authSlice.actions;
  export default authSlice.reducer;
  