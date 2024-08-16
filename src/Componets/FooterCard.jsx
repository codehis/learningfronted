import React from 'react'

export default function FooterCard(props) {
  return (
    <>
      
        <div className="hidden md:flex flex-col w-1/2  ">
            <div className="w-full md:flex  md:justify-center text-3xl font-semibold">
                <h1>{props.title}</h1>
            </div>
            <div className="w-full md:flex md:justify-center ">
<div className="md:m-4 p-3">
<h1 className='m-2'>{props. Aboutus}</h1>
<h1 className='m-2'>{props.Contactus}</h1>
<h1 className='m-2'>{props.FAQ}</h1>
</div>
<div className="md:m-4 p-3" >
<h1 className='m-2'>{props.Jobassurance}</h1>
<h1 className='m-2'>{props.Privacypolicy}</h1>
<h1 className='m-2'>{props.Termsandcondition}</h1>
</div>
            </div>
        </div>

        {/* responsive  */}
        <div className="flex flex-col  w-full md:hidden   ">
            <div className="w-full flex  text-3xl font-semibold">
                <h1 className='ml-2'>{props.title}</h1>
            </div>
            <div className="w-full flex  ">
<div className="m-2  w-full">
<h1 className='m-1'>{props. Aboutus}</h1>
<h1 className='m-1'>{props.Contactus}</h1>
<h1 className='m-1'>{props.FAQ}</h1>
</div>
<div className=" w-full m-4 " >
<h1 className='m-1'>{props.Jobassurance}</h1>
<h1 className='m-1'>{props.Privacypolicy}</h1>
<h1 className='m-1'>{props.Termsandcondition}</h1>
</div>
            </div>
        </div>
       
     
    </>
  )
}
