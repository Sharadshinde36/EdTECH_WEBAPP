import React from 'react'
import HighlightText from '../components/core/Homepage/HighlightText'
import Quote from '../components/core/Homepage/Aboutpage/Quote'
import img from '../assets/img/image11.jpg'
function About() {
  return (
    <div>
{/* section 1 */}
<div>
    <header>
        Driving Innovation in Online Education for a <HighlightText text={'Better Future'}></HighlightText>
        <p>lrem ispsun is the britest fudncvjkjcmasdflaxsjdklfjndclmcfdkljfncldmkfxdaklkdlmxjlfdsakjf,jsdfjmjakdlcnhjmsxlask</p>
    </header>
    <div className='flex gap-x-3 mx-auto'>
        <img src={img}></img>
        <img src={img}></img>
        <img src={img}></img>
    </div>
</div>
{/* section 2 */}
<div>
    <Quote/>
</div>



    </div>
  )
}

export default About