import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../helper/axiosInstace";
import toast from "react-hot-toast";


const initialState={
ActiveDATA:[],
paymentDATA:[]


}

export const activeUserDATA = createAsyncThunk("activeUserDATA", async () => {
    try {
      let res = await axiosInstance.get("/user/userSuscriber"); // Added await here
      
      return res.data.suscribUser
      ; // Return the data from the response

    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error; // Rethrow the error to propagate it to the rejected state
    }
  });

  export const getPaymentDATA = createAsyncThunk("getpaymentdetails", async () => {
    try {
      let res = await axiosInstance.get("/payments/getAllPayment"); // Added await here
      
      return res.data.
      paymentdetails; // Return the data from the response
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error; // Rethrow the error to propagate it to the rejected state
    }
  });
  

  const Admin=createSlice({
    name:"DataForAdmin",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getPaymentDATA.fulfilled, (state, action) => {
           state.paymentDATA=[action.payload]
           console.log(state.paymentDATA)

          })
          .addCase(activeUserDATA.fulfilled, (state,action) => {
           
            state.ActiveDATA=[action.payload]
          })


   
    }
})

export const {} = Admin.actions;
export default Admin.reducer;