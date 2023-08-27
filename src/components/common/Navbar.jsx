import React from 'react'
import { NavbarLinks  } from '../data'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/api';
function Navbar() {
  const {token}=useSelector((state)>state.auth);
  const {user}=useSelector((state)=>state.cart);
  const {totalItems}=useSelector((state)=>state.cart);
  const {subLinks,setSubLinks}= userState([]);
  useEffet(()=>
  {
    async()=>
    {
      try{
const result= await apiConnector("GET",categories.CATEGORIES_API)
setSubLinks(result.data.data);
      }catch(err)
      {
        console.log('finding in categorii  api');
        console. log(err);
      }
    }

  },[])
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-slate-300'>
        <div className='flex max-w-maxContent w-11/12 '>
           <Link to="/">
            <img src="" alt="logo" width={ 160} height={42}></img>
           </Link>
           {/* navlinks */}
           <nav>
            <ul className='flex gap-x-6 text-white'>
         {   NavbarLinks.map((link,index)=>
(
   <li  className='text-white'>

 <Link to={link?.path}><p className='text-yellow-400' >{link?.title}</p>
 <div className='invisible absolute left-[50%'></div></Link>



   </li>


))}
            </ul>
           </nav>
           {/* login sighn u dashobard */}
           <div className='flex gap-x-4'>
{/* {
  user&&user?.accountType!="Instructor" && (
 <Link to='/dashboard/cart' className='relative'>
 icon {totalItems>0&&(<span>{totalItems}</span>)}
 </Link>)

  
}
{
  token==null&&(
    <Link>
      <button>log in</button>
    </Link>
  )
}
{
  token=null&&(
    <Link><button>sign Up</button></Link>
  )
}
{
  token!==null&&<ProfileDropDown></ProfileDropDown>
} */}
           </div>
        </div>
    </div>
  )
}

export default Navbar