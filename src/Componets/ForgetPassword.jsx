// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import authen, { DoforgetPassword } from '../Store/Slices/authen'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// export default function ForgetPassword() {

// const dispatch=useDispatch();
// const navigate=useNavigate();
// const[email,setuserEmail]=useState();

// const handleInput=(e)=>{

//     const {name,value}=e.target;

//     setuserEmail({...email,[name]:value})

// }

// const handleForgetFuntion =(e)=>{

//     e.preventDefault()

//     let res=dispatch(DoforgetPassword(email))


// }


//   return (
//     <div className="flex h-96 flex-col mt-5 w-full justify-center px-6 py-12 lg:px-8">
  
//     <div class="mt-4  sm:mx-auto sm:w-full sm:max-w-sm">
//     <form class="space-y-3"   >
    
   
  

  
 
     
     
     
//       <div>
//         <label htmlFor="name"className="block text-sm font-medium leading-6 text-gray-900">Enter Your Email</label>
//         <div class="">
//           <input id="name" name="email" type="email"  onChange={handleInput} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-2xl   p-3  font-semibold"/>
//         </div>
//       </div>
    
      
      
        
      
//       <div className='mt-5'>
//         <button type="submit" onClick={handleForgetFuntion} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Find Your Account</button>
//       </div>
//       {/* <div>
//        <Link to=''>
//        <button   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go Back to Pofile</button>
//        </Link>
//       </div> */}
//     </form>
    
    
//     </div>
//     </div>
//   )
// }
