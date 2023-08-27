import React, { useState } from 'react'

function ForgotPassword() {
    // const {loading}=useSelector((state).state.auth)
    const {emailSent,setEmailSent}=useState(false);
    const {email,setEmail}=useState('');
    const dispatch=useDispatch();
    const handleOnSubmit=()=>
    {
        e.preventDefault();
dispatch(getPasswordResetTOken( email,setEmailSent));
    }
  return (
    <div>
<div>
<h1>{!emailSent?"Reset your Password" : "Check your Email"}</h1>
<p>
    {
        !emailSent ?("lorem ispum is thee setring email not send") : (`email send is successfull to${email}`)
    }
</p>
<form onSubmit={handleOnSubmit}>
    {
        !emailSent &&(
            <>
            <label>
                <p>emil adress</p>
                </label>
                <input placeholder="place your email here" type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </>
           
        )
    }
    <button type='submit'>
        {!emailSent?"Reset password":"Resend email"}
    </button>
</form>

<div>
    <Link to='/login'>
        <p>back to login</p>
    </Link>
</div>
</div>
<div>
    <h1></h1>
    <p></p>
</div>



    </div>
  )
}

export default ForgotPassword