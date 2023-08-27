import React from 'react'
import TimelineSection from '../components/core/Homepage/TimelineSection'
import LeariningLanguageSection from '../components/core/Homepage/LeariningLanguageSection'
import InstructorSection from '../components/core/Homepage/InstructorSection'
// import {FaArrowRight} from 'react-icon'
import {Link} from 'react-router-dom'
import ExploreMore from '../components/core/Homepage/ExploreMore'
import HighlightText from '../components/core/Homepage/HighlightText'
import CTAButton from '../components/core/Homepage/CTAButton'
import Countdown from "../assets/video/Countdown1.mp4"
import CodeBlocks from '../components/core/Homepage/CodeBlocks'
function Home() {
  return (
    <div>
        {/* section 1 */}

<div className='max-w-[1280px] relative mx-auto flex flex-col w-11/12 items-center text-white justify-between mt-10'>
    <Link to={"/signup"}>
        <div className='mx-auto rounded-full bg-gray-800 font-bold text-gray-400 transition-all duration-200 hover:scale-95 m-t-15 p-1 '>
            <div className='flex rounded-full px-10 '>
                <p>Become an Instructor</p>
  <button>=arrow</button>
 
        </div>
        </div>
    </Link>
    <div className='text-center text-xl font-semibold mt-4'>
Empower Your Future With
<HighlightText text={"Coding /skills"}></HighlightText> 
    </div>
    <div className=' mt-4 w-[90%] text-center text-lg font-bold text-gray-300'>
        kdkjsaksjhcnfhjdkhfnakjlmfncjshnachmcxkhajjkmaljfdkncakjmxhcljmakfmsdkckjnhjkhmfcjfnmaj,alakjfmfhcunctuyenumaurntuuuumksj,fc
    </div>
<div className='flex flex-row gap-5 mt-8'>
<CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>
<CTAButton active={false} linkto={'/'}>Learn More</CTAButton>

</div>
<div className='shadow-blue-20 mx-3 my-12'>
<video  muted loop autoPlay >
    <source src={Countdown} type='video/mp4'></source>
</video>
</div>
{/* code sectioon 1 */}
<div>
    <CodeBlocks 
        position={"lg:flex-row"}
        heading={
            <div>unlock your <HighlightText text={"unlock your potentilal"}></HighlightText> With our education site</div>
        }
        subheading={"our courses are designed and taught nu industry expretes who have years of experience in coaching"}
        ctabtn1={
            {
                btnText:'try it yourself',
                linkto:'/signup',
                active:'true'
        }}
        ctabtn2={
            {
                btnText:'learn more',
                linkto:'/login',
                active:'false'
        }}
        codebloack={'<!DOCTYPE html>\n<html>\nhead><title><linkrel="styleheet"></title></html>'}
        codeColor={'text-yellow-100'}
    />
   
</div>

{/* code sectioon 2 */}
<div>
    <CodeBlocks 
        position={"flex-row-reverse"}
        heading={
            <div>unlock your <HighlightText text={"unlock your potentilal"}></HighlightText> With our education site</div>
        }
        subheading={"our courses are designed and taught nu industry expretes who have years of experience in coaching"}
        ctabtn1={
            {
                btnText:'try it yourself',
                linkto:'/signup',
                active:'true'
        }}
        ctabtn2={
            {
                btnText:'learn more',
                linkto:'/login',
                active:'false'
        }}
        codebloack={'<!DOCTYPE html>\n<html>\nhead><title><linkrel="styleheet"></title></html>'}
        codeColor={'text-yellow-100'}
    />
   
</div>
<ExploreMore/>
</div>





        {/* section 2 */}
<div className="bg-grey-200 text-black">
<div className='bg-white h-auto'>
    <div className='w-11/12 flex-col max-w-[1260px] flex items-center gap-5 mx-auto '>
    <div className='h-[150px]'></div>
        <div className='flex flex-row gap-10 text-white'>
            <CTAButton active={true} linkto={'/signup'}>Explore full caatelog</CTAButton>
            <CTAButton active={false} linkto={'/signup'}>Learn More</CTAButton>
        </div>
    </div>
    <div className='mx-auto w-11/12 max-w-[1260px] flex items-center justify-between gap-7 mt-[100px] '>

<div className='flex flex-row gap-8 text-4xl font-semibold'>
    <div className='text-4xl font-semibold' >Get te skills need for <HighlightText text={"job that is demand"}></HighlightText></div>
</div>
<div className='flex flex-col gap-10 w-[40%] items-start'>
<div className='text-[16px]'> lorem is the best waid ffkdjcklmdsajf fdfdajkcfmadkfjkd</div>
<CTAButton active={true}>learn More</CTAButton>

</div>



    </div>
    <div className='mx-auto w-11/12 max-w-[1260px] flex items-center justify-between gap-7 mt-[100px] '>
    <TimelineSection/>

    </div>
   
    <LeariningLanguageSection/> 
</div>

</div>

        {/* section 3 */}
        <div className='w-11/12 max-w-[1260px] flex flex-col mx-auto justify-between gap-8 text-white'>


<InstructorSection/>
<h2 className='mx-auto text-center text-4xl font-bold'>Reviwes from other students</h2>



        </div>
        {/* section 4 */}
    </div>
  )
}

export default Home