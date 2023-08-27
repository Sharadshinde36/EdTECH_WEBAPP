import React, { useState } from 'react'

function updatePassword() {
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [showPassword,setShowPassword]=useState(false);
const [formData,setFormData]=useState({
    password:"",
    confirmPassword:""
})
const handleOnChange=(e)=>
{
   setFormData((prev)=>(
    {
        ...prev,
        [e.target.name]:e.target.value,
    }
   ))
}
const handleOnSubmit=()=>
{
    e.preventDefault();
    const token=location.pathname.split('/').at(-1);
    dispatchEvent(resetPasswod(password,confirmPassword,token) )
}
  return (
    <div>
        <div>
            <h1>choose new password</h1>
            <p>almost done enter your pasowerd and yoru all set</p>
            <form onSubmit={handleOnSubmit}>
                <label>
                    <p>new password<sup>*</sup></p>
                    <input required type={showPassword?"text":"password" } name='password' value={password} onChange={handleOnChange}>
                     </input>
                </label>
            </form>
        </div>
    </div>
  )
}

export default updatePassword