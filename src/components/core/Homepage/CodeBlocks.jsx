import React from 'react'
import CTAButton from './CTAButton'
import HighlightText from './HighlightText'
import { TypeAnimation } from 'react-type-animation'
function CodeBlocks({position,heading,subheading,ctabtn1,ctabtn2,codebloack,backgroundGradient,codeColor}){
  return (
    <div className={`flex ${position} my-20 justify-between `}>

{/* section 1 */}
<div className='w-[50%] flex flex-col gap-8'>
{heading}
<div className='text-grey-800'>
    {subheading}
</div>
<div className='flex flex-row'>
    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
    <div className='flex gap-2 items-center'>{ctabtn1.btnText}</div>
    </CTAButton>
    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
    <div className='flex gap-2 items-center'>{ctabtn2.btnText}</div>
    </CTAButton>
</div>

</div>
 {/* section 2 typing animation */}
 <div className='w-[10%] flex flex-col text-center text-gray-400 font-serif font-bold'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
    </div>
    <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor}`}>
<TypeAnimation sequence={['Hi this is curring code to display\nthis is the second line and this is file\n hellos sharad your code is working properly\n',10000,""]} omitDeletionAnimation='false' repeat={Infinity}></TypeAnimation>
    </div>


    </div>
  )
}

export default CodeBlocks