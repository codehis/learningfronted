import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation,useNavigate } from 'react-router-dom'




export default function CourseDiscription() {
  const { state } = useLocation();
  const { role, data } = useSelector((state) => state.auth);
    
    const navigate = useNavigate();
    // console.log();
console.log()
  return (
    <>
    <div>
       {/* wrapper for course description */}
      <div className=" hidden md:min-h-[90vh] pt-12 px-20  md:flex flex-col items-center justify-center ">
        {/* displaying the course details */}
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          {/* creating the left side of description box */}
          <div className="space-y-5">
            <img
              className="w-full h-64"
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
            />

            {/* course details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Total Lectures :{" "}
                  </span>
                  {state.numberOfLectures}
                </p>
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Instructor :{" "}
                  </span>
                  {state.createdBy}
                </p>
              </div>

              {/* adding the subscribe button */}
            
              {role === "ADMIN" || data?.subscription?.status === "active" ? (
               
                  <button
                  onClick={() =>
                    navigate("/courses/displayLecture", {
                      state: { ...state },
                    })
                  }
                  className="flex w-full justify-center mt-8 rounded-md bg-indigo-600 px-3  py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Watch Lectures
                </button>
               
              
                
               ) : ( 
                <button
                  onClick={() => navigate("/checkout")}
                  className=" flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe to Course
                </button>
               )} 
            </div>
          </div>


          {/* creating the right section of description box */}
          <div className="space-y-2 text-xl">
            <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">
              {state.title}
            </h1>

            <p className="text-yellow-500 font-bold">Course Description :</p>

            <p>{state.description}</p>
          </div>
        </div>
      </div>
    </div>


    {/* responsive  */}

    <div>
       {/* wrapper for course description */}
      <div className="min-h-[90vh] p-6 w-full pt-12  flex flex-col flex-wrap items-center justify-center md:hidden ">
        {/* displaying the course details */}
        <div className="flex flex-col  flex-wrap-reverse items-center justify-center  gap-10 py-10 relative">
          {/* creating the left side of description box */}
          <div className="space-y-5">
            <img
              className="w-full h-64"
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
            />

            {/* course details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Total Lectures :{" "}
                  </span>
                  {state.numberOfLectures}
                </p>
                <p className="font-semibold ml-4">
                  <span className="text-yellow-500 font-bold">
                    Instructor :{" "}
                  </span>
                  {state.createdBy}
                </p>
              </div>

              {/* adding the subscribe button */}
            
              {role === "ADMIN" || data?.subscription?.status === "active" ? (
               
                  <button
                  onClick={() =>
                    navigate("/courses/displayLecture", {
                      state: { ...state },
                    })
                  }
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Watch Lectures
                </button>
               
              
                
               ) : ( 
                <button
                  onClick={() => navigate("/checkout")}
                  className=" flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe to Course
                </button>
               )} 
            </div>
          </div>


          {/* creating the right section of description box */}
          <div className="space-y-2 text-xl">
            <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">
              {state.title}
            </h1>

            <p className="text-yellow-500 font-bold">Course Description :</p>

            <p>{state.description}</p>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
