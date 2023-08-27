import React from 'react'
import image from '../../../assets/img/image2.jpeg'
const timeline=[{
    logo:'logo1',
    heading:'Leadership',
    Description:"fully commited to success of company"
},
{
    logo:'logo1',
    heading:'Leadership',
    Description:"fully commited to success of company"
},
{
    logo:'logo2',
    heading:'Leadership',
    Description:"fully commited to success of company"
},
{
    logo:'logo3',
    heading:'Leadership',
    Description:"fully commited to success of company"
},
{
    logo:'logo4',
    heading:'Leadership',
    Description:"fully commited to success of company"
}
]
function TimelineSection() {
  return (
    <div>
        <div className='flex flex-row gap-9 items-center'>
        <div className='w[45%] flex flex-col gap-11'>
{timeline.map((element,index)=>
{
    return(
        <div className='flex flex-row gap-8' key={index}>
        <div className='w-[50px] h-[50px] bg-white items-center flex shadow-md'>{element.logo}</div>
<div>
    <h2>{element.heading}</h2>
    <p className='text-base'>{element.Description}</p>
</div>
        </div>
    )
})}
        </div>
<div className='relative shadow-blue-200'>
<img src={image} alt="timelineimage" className='object-fit shadow-white w-[450px] h-[350px]'></img>
<div className='absolute bg-green-800 flex flex-row text-white gap-10 p-10 translate-x-7 -translate-y-20 h-[35%] w-[80%]' >
    <div className='flex flex-row border-cyan-400 font-bold'><h1>10</h1>
    <h1>Years of Experience</h1>
    
     </div>
     <div className='flex border-r-white flex-row  font-bold'><h1>250</h1>
    <h1>Projects which created recently</h1>
    
    
    
    </div>
     </div>
 
</div>

        </div>
    </div>
  )
}

export default TimelineSection