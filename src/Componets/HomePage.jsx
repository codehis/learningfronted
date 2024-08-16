import React from 'react'
import BannerPic from './image/bannerPicture.png';
import Typed from 'react-typed';
import SecondHome from './SecondHome';
import CoursePage from './Courses/CoursePage';
import { FaWhatsapp } from "react-icons/fa";
import Footer from './Footer';
import Header from './Header';
import { Navigate, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate=useNavigate()
  return (
    
   <>

    <div className=' hidden  md:flex w-full justify-between items-center'>
     
     
     
      <div className=" ml-10  w-1/2 flex flex-col  justify-center">
        <h1 className='text-3xl font-semibold  '>Upscaling Made 
        <Typed className='pl-3  text-red-400 '
                strings={[
                    'AFFORDABLE',
                    'PRACTICAL',
                    'EASY']}
                    typeSpeed={60}
                    backSpeed={50}
                    attr="placeholder"
                    loop={true} 
                    
                    >
                   <input type="text" className='text-red-400 '/>
                </Typed>
        <br />
           With Learning_ADDA</h1>
           <p className='mt-5 text-lg text-justify'>Learning_ADDA is your one-stop-shop for upscaling. Get maximum value for time
        and resources you invest, with job-ready courses & high-technology,
          available at the lowest cost.</p>
         <button  onClick={()=>navigate('/coursepage')} className='w-1/3 mt-8 p-3 text-xl cursor-pointer  rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-indigo-600 hover:bg-indigo-500 text-white'>Explore Course</button>
    </div>
      <div className=" mr-10 w-1/3 ">
       <img src={BannerPic} alt="" />

      </div>
      
    </div>
   
   {/* responsive  */}
   <div className='w-full flex flex-col md:hidden '>


   <div className=" w-full ">
       <img src={BannerPic} alt="" />

      </div>
      <div className="  w-full mt-4 flex flex-col items-center  ">
        <div className=""><h1 className='text-3xl font-semibold '>Upscaling Made 
        </h1></div>
        <div className=" w-1/2 ">
        <Typed className=' text-3xl font-semibold text-red-400    '
                strings={[
                    'AFFORDABLE',
                    'PRACTICAL',
                    'EASY']}
                    typeSpeed={60}
                    backSpeed={50}
                    attr="placeholder"
                    loop={true} 
                    
                    >
                   <input type="text" className='w-full text-red-400 '/>
                </Typed>
        </div>
          <h1 className='text-3xl font-semibold'> With Learning_ADDA</h1>
           <p className='mt-5  text-lg text-center '>Learning_ADDA is your one-stop-shop for upscaling. Get maximum value for time and resources you invest, with job-ready courses & high-technology,available at the lowest cost.</p>
         <button onClick={()=>navigate('/coursepage')} className='w-1/2  mt-5 p-3 text-xl cursor-pointer  rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-indigo-600 hover:bg-indigo-500 text-white'>Explore Course</button>
    </div>
     
      
    </div>
   
   <SecondHome/>
   <CoursePage/>
   
   <div className="  text-6xl fixed bottom-6 right-8 cursor-pointer">
   
   {/* <FaWhatsapp/> */}
   </div>
   <Footer/>
   </>
  )
}
