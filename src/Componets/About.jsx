import React from 'react'
import aboutMainImage from "../Componets/image/QuotesPersonalityImage/aboutMainImage.png";
import apj from "../Componets/image/QuotesPersonalityImage/apj.png";
import billGates from "../Componets/image/QuotesPersonalityImage/billGates.png";
import einstein from "../Componets/image/QuotesPersonalityImage/einstein.png";
import nelsonMandela from "../Componets/image/QuotesPersonalityImage/nelsonMandela.png";
import steveJobs from "../Componets/image/QuotesPersonalityImage/steveJobs.png";
import Footer from './Footer';

export default function About() {
  return (
    <>
    <div>
      <div className=" hidden md:pl-20 md:pt-10 md:flex flex-col ">
        {/* creating the about page main section */}
        <div className="flex items-center gap-5 mx-10">
          {/* out moto section */}
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl ">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their creativity, skills and knowledge to each
              other to empower and contribute in the growth and wellness of the
              mankind.
            </p>
          </section>

          {/* our moto image section */}
          <div className="w-1/2">
            <img
              id="test1"
              
              className=" "
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        {/* top personalities quotes section */}
        <Footer/>
      </div>
      
    </div>

    {/* responsive  */}


    <div>
      <div className="p-5 pt-10 flex flex-col   w-full  md:hidden">
        {/* creating the about page main section */}
        <div className=" w-full flex items-center justify-center flex-col gap-5 ">
          {/* out moto section */}
          <section className="w-full space-y-10">
            <h1 className=" text-4xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl w-full ">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their creativity, skills and knowledge to each
              other to empower and contribute in the growth and wellness of the
              mankind.
            </p>
          </section>

          {/* our moto image section */}
          <div className="w-1/2 ">
            <img
             
              // style={{
              //   filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              // }}
              className=""
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        {/* top personalities quotes section */}
        
      </div>
      {/* <Footer/> */}
    </div>
    
    
    
    </>
    
  )
}
