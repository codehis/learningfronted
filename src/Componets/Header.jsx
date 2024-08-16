import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import {userContext} from '../App';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../Store/Slices/authen'
import toast from 'react-hot-toast';




export default function Header() {

  const userData=useSelector((state)=>state.auth.data)

  const dispatch=useDispatch();
  const navigate = useNavigate();

  // for checking user logged in or not
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for dispaying the options, according to user role
  const role = useSelector((state) => state?.auth?.role);


// const[show,setShow]=useState(false)
const[toggel,setTogge]=useState(true)
const [show,setShow]=useState(true)
// function to handle logout
const handleLogout = async (event) => {
  event.preventDefault();

  // calling logout action
  const res = await dispatch(logout());

console.log(res)

  // redirect to home page if true
  if (res?.payload?.success) {
    toast.success("Logout Successfull")
        navigate("/Login");
      }

};


// const{state,dispatch}=useContext(userContext);
  const RenderMenu=()=>{
if(isLoggedIn){
  return(
    <>
    
    <div className='w-full bg-white drop-shadow-2xl h-16'>
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold">
            <h1 className='p-2'>Learning_ADDA</h1>
        </div>

        {
            toggel ?  <RxHamburgerMenu className='text-3xl cursor-pointer block mr-3 md:hidden' onClick={()=>setTogge(!toggel)} />:
            <RxCross2 className='text-3xl block cursor-pointer mr-3 md:hidden' onClick={()=>setTogge(!toggel)}/>    
             
             
        }

       
       
            <ul className=' hidden md:flex text-lg'>
            <li className='m-3'>
              <Link to='/'  >
                Home
              </Link>
              
              </li>


            <li className='m-3 cursor-pointer' 
            // onClick={()=>setShow(!show)}
            
            >
             <Link to='/CoursePage'> Course</Link>
           
            
            
            </li>
            <li className='m-3 cursor-pointer'>
            <Link to='/About Us'  >
                About Us
              </Link>
            </li>
            <li className='m-3 cursor-pointer'>
              <Link to='/Contact Us'  >
                Contact Us
              </Link>
              
              </li>
            
            </ul>
       
       
       
            <div className="hidden md:flex  flex flex-col items-center  p-2 mr-2 text-lg cursor-pointer rounded-lg  "> 
        <div className="w-10 h-10 hover:outline-indigo-300 rounded-full " onClick={()=>setShow(!show)}>
      <img className='w-full h-full rounded-full mr-3' src={userData.avatar} alt="" />
      </div>
      
      <div className={`absolute top-14 rounded-md  text-slate-700 w-36  right-3 p-5 bg-slate-50 ${show?`hidden`:`block`}`}>
        <ul className='flex  flex-col   '>
          <li className={`hover:font-extralight  ` } onClick={()=>setShow(!show)}>
            <Link to='/user/Profile'>My Profile</Link>
          </li>
         {
          role==="ADMIN" ? 
           <li className={`hover:font-extralight ` } onClick={()=>setShow(!show)}>
          <Link to='/DashBoard/Admin'>DashBoard</Link>
           </li>:null

         }
          <li className={`hover:font-extralight ` } onClick={()=>setShow(!show)}>
            <Link to='/coursePage'>Courses</Link>
          </li>
          
          <li className={`hover:font-extralight  ` } onClick={()=>setShow(!show)}>
            <Link onClick={handleLogout} > Log Out</Link>
          </li>
        </ul>
      </div>
      
      
      
      </div>
       
       
        </div>
      </div>
      {/* responsive  */}


      <div className={` z-10 duration-500  w-full fixed top-46  bg-white   flex flex-col h-screen justify-center items-center ${toggel? 'left-[-100%]':'left-0'}   md:hidden`}>
        <div className="">
        <ul className=' flex flex-col text-lg items-center '>
            
            
            
        <li className='m-3 ' onClick={()=>setTogge(!toggel)}>
              <Link to='/'   onClick={()=>setShow(true)}  >
                Home
              </Link>
              
              </li>
      <li className='m-3 ' onClick={()=>setTogge(!toggel)}>
              <Link to='/CoursePage'   onClick={()=>setShow(true)}  >
                Course
              </Link>
            </li>
            <li className='m-3' onClick={()=>setTogge(!toggel)} >
              <Link to='/About Us'   onClick={()=>setShow(true)}   >
                About Us
              </Link>
              
              </li>
            <li className='m-3' onClick={()=>setTogge(!toggel) } >
              <Link to='/Contact Us'  onClick={()=>setShow(true)}  >
                Contact Us
              </Link>
              
              </li>
            
            </ul>
        </div>
       
        
        <div className="flex  flex flex-col items-center  p-2 mr-2 text-lg cursor-pointer rounded-lg  "> 
        <div className="w-36 h-36 flex  hover:outline-indigo-300 rounded-full " onClick={()=>setShow(!show)}>
      <img className='w-16 h-16 rounded-full mr-3' src={userData.avatar} alt="" />
      <h1 className='font-semibold'>{userData.name}</h1>
      
      </div>
      
      <div className={`absolute top-14 rounded-md  text-slate-700 w-36  right-3 p-5 bg-slate-50 ${show?`hidden`:`block`}`}>
        <ul className='flex  flex-col items-center  '>
          <li className={`hover:font-extralight  ` } onClick={()=>setShow(!show)}>
            <Link 
            onClick={()=>setTogge(true) }
            to='/user/Profile' 
            >My Profile</Link>
          </li>
          <li className={`hover:font-extralight ` } onClick={()=>setShow(!show)}>
            <Link to='/DashBoard/Admin'
             onClick={()=>setTogge(true) }
            >DashBoard</Link>
          </li>
          <li className={`hover:font-extralight ` } onClick={()=>setShow(!show)}>
            <Link to='/coursePage'
             onClick={()=>setTogge(true) }
            >Courses</Link>
          </li>
          <li className={`hover:font-extralight  ` } onClick={()=>setShow(!show)}>
            <Link onClick={handleLogout} > Log Out</Link>
          </li>
        </ul>
      </div>
      
      
      
      </div>

      </div>
     
       
       
       
       

  

    
    </>
  )
}
else{
  return(
    <>
    
    <div className='w-full bg-white drop-shadow-2xl h-16 z-10'>
<div className="w-full flex justify-between items-center">
  <div className="text-xl font-semibold">
      <h1 className='p-2'>Learning_ADDA</h1>
  </div>

  {
      toggel ?  <RxHamburgerMenu className='text-3xl cursor-pointer block mr-3 md:hidden' onClick={()=>setTogge(!toggel)} />:
      <RxCross2 className='text-3xl block cursor-pointer mr-3 md:hidden' onClick={()=>setTogge(!toggel)}/>    
       
       
  }

 
 
      <ul className=' hidden md:flex text-lg'>
      <li className='m-3' >
        <Link to='/'   >
          Home
        </Link>
        
        </li>


      <li className='m-3 cursor-pointer' 
      // onClick={()=>setShow(!show)}
      
      >
       <Link to='/CoursePage'> Course</Link>
     
      
      
      </li>
      <li className='m-3'>
              <Link to='/About Us'  >
                About Us
              </Link>
              
              </li>
      <li className='m-3'>
              <Link to='/Contact Us'  >
                Contact Us
              </Link>
              
              </li>
      
      </ul>
 
 
 
  <div className="hidden md:flex  p-2 mr-2 text-lg cursor-pointer  rounded-lg  "> 


 <button className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-indigo-600 hover:bg-indigo-500 text-white' >  
  
<Link to='/register'> Login/Register</Link>

</button>
 
 
  </div>
</div>
{/* responsive  */}


<div className={` z-10 duration-500   w-full fixed top-46 bg-white border-2 md:hidden flex flex-col h-screen justify-center items-center ${toggel? 'left-[-100%]':'left-0'}`}>
  <div className="">
  <ul className=' flex flex-col text-lg items-center '>
  <li className='m-3 ' onClick={()=>setTogge(!toggel)}>
              <Link to='/'  >
                Home
              </Link>
              
              </li>
      <li className='m-3 ' onClick={()=>setTogge(!toggel)}>
              <Link to='/CoursePage'  >
                Course
              </Link>
              
              </li>
     
      <li className='m-3 ' onClick={()=>setTogge(!toggel)}>
              <Link to='/About Us'  >
                About Us
              </Link>
              
              </li>
      <li className='m-3' onClick={()=>setTogge(!toggel)}>
              <Link to='/Contact Us'  >
                Contact Us
              </Link>
              
              </li>
      
      </ul>
  </div>
 
  <div className="   flex justify-center items-center p-2 mr-2 text-lg cursor-pointer  rounded-lg"> 
 
  <div className="">
 <button  onClick={()=>setTogge(!toggel)} className='  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600   '>  
    <Link to='/register'>Login/Register</Link>
  </button>
 </div>

  
  </div>

</div>

 
 
 
 
</div>


    </>
  )
}


}
return(
  <React.Fragment>
  
  <RenderMenu/>
  
  </React.Fragment>
)


 
  
}


 