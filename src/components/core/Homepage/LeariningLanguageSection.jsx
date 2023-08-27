import React from 'react'
import HighlightText from './HighlightText'
import img1 from '../../../assets/img/image10.jpg'
import img2 from '../../../assets/img/image11.jpg'
import img3 from '../../../assets/img/image12.jpg'
import CTAButton from './CTAButton'
function LeariningLanguageSection() {
  return (
    <div className=" flex flex-col gap-5 mt-16">
    <div className='mx-auto '>
        <h1 className='text-4xl'>YOur Swiss Knifr for <HighlightText text={'learingi any language '}/></h1>
<p className='text-xl'>orime is psun is  the subheading and this is the sentence os the gather of the lsaz</p>
    </div>
    <div className='flex  flex-row gap-10 items-center mt-8'>
    <img className='object-contain w-[250px] h-[250px] -r-32' src={img1}></img>
    <img className='object-contain  w-[250px] h-[250px]' src={img2}></img>
    <img className='object-contain  w-[250px] h-[250px]' src={img3}></img>

    </div>
    <div className='w-fit items-center mx-auto'>
    <CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>
    </div>
   

    </div>
  )
}

export default LeariningLanguageSection