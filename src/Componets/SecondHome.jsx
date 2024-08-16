import React from 'react'
import SecondHomeCard from './SecondHomeCard'
import ONEpic from './image/statistics1.png'
import TWOpic from './image/statistics2.png'
import THREEpic from './image/statistics3.png'
import FoursePic from './image/statistics4.png'

export default function SecondHome() {
  return (
    <>
     <div className=' hidden  md:flex justify-center  w-full mt-7 '>
      <SecondHomeCard img={ONEpic} title='55%' para='Average Salary Hike'/>
      <SecondHomeCard img={TWOpic} title='600+' para='Different Courses'/>
      <SecondHomeCard img={THREEpic} title='12000+' para='Career Trasitions'/>
      <SecondHomeCard img={FoursePic} title='400+' para='Hiring Partners'/>
    </div>

    {/* responsive  */}
    <div className='  flex flex-col  items-center  w-full mt-7 md:hidden '>
      <SecondHomeCard img={ONEpic} title='55%' para='Average Salary Hike'/>
      <SecondHomeCard img={TWOpic} title='600+' para='Different Courses'/>
      <SecondHomeCard img={THREEpic} title='12000+' para='Career Trasitions'/>
      <SecondHomeCard img={FoursePic} title='400+' para='Hiring Partners'/>
    </div>
    
    
    
    </>

  )
}
