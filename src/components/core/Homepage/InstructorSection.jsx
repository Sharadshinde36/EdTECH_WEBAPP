import React from 'react'
import img1 from '../../../assets/img/image11.jpg';
import CTABTN from '../../../components/core/Homepage/CTAButton'
function InstructorSection() {
  return (
    <div>
        <div className='flex flex-row gap-20 items-center'>
            <div className='w-[50%]'>
<img src={img1} className="shadow-white mt-16"></img>
            </div>
            <div className='w-[50%] flex flex-col gap-10' >
            <div className='text-4xl font-serif'>
              Become a <span className="text-4xl text-blue-900"></span>
            </div>
            <p className='text-white  font-medium'>Instructors are from around the word teach miilions of theh 
          
            students worldwideto teact you by the heart and love</p>
     <CTABTN  active={true}>learn more</CTABTN>
            </div>
        </div>
    </div>
  )
}

export default InstructorSection