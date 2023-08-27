


export function getPasswordResetTOken(email,setEmailSent)
{
return async(dispatch)=>
{
    dispatch(seLoading(true));
    try{
        const response= await apiConnector("POST",RESETPASSWORD_API,{email});
        console.log(response)
        if(response.data.sucess)
        {
            throw new Error(response.data.message)
        }
    }
}
}