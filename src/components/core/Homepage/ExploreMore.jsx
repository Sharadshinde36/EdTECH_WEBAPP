import React from 'react'

const tabsName=["free","newTocoding","most popular","skill paths"]
let course=[{
    heading:'learnHtml',
    description:"this is the description and concepts of html",
    level:'begginer',
    lessionNumber:6
},
{
    heading:'learncss',
    description:"this is the description and concepts of html",
    level:'begginer',
    lessionNumber:6
},
{
    heading:'learnjs',
    description:"this is the description and concepts of html",
    level:'begginer',
    lessionNumber:6
}]
function ExploreMore() {
    // const [currentTab,setCurrentTab]=useState("free");
    // const [courses,setCourses]=useState([{
    //     heading:'learnHtml',
    //     description:"this is the description and concepts of html",
    //     level:'begginer',
    //     lessionNumber:6
    // },
    // {
    //     heading:'learncss',
    //     description:"this is the description and concepts of html",
    //     level:'begginer',
    //     lessionNumber:6
    // },
    // {
    //     heading:'learnjs',
    //     description:"this is the description and concepts of html",
    //     level:'begginer',
    //     lessionNumber:6
    // }]);
    // const [currentCard,setCurrentCard]=userState(course[0].heading);
   
  return (
    <div className='text-4xl font-semibold mx-auto text-center'>
<div>Unlock the Power of the code</div>
<p>Learn to build anyting you can imagine </p>
<div className='flex flex-row gap-5'>
    {
        tabsName.map((element,index)=>
        {
            return(
                <div>
                <div  className={`text-16px flex flex-row items-center gap-2 `}>
                    {element}
                </div>
                    
                </div>
            )
        })
    }
</div>
<div className='h-[150px]'>
     {/* <div>
        {
            course.map((element,index)=>
            {
                <CourseCard cardData={element} key={index}/>
            })
        }
     </div> */}
</div>
    </div>
  )
}

export default ExploreMore