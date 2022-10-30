
import './auth.css'
import arrow from './image/arrow.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Forgot=()=>{
    const navigate=useNavigate()

    const [input,setInput]=useState('')

   

    return(
        <>

            <form style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}} onSubmit={()=>{ ()=>{navigate("/auth/login/verify")}}}>
            <p style={{color:"gray" ,margin:"0.5rem"}}>Enter your email address </p>
            <div className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value={input} onChange={ (e)=>{setInput(e.target.value)}}  /></div>
            <button className='auth-but'  type='submit' >Reset Password</button>
            </form>
            <br/>
            <div className='bottom'><button  className='back-but' onClick={()=>{navigate("/auth/login")}}><img className='arrow-icon' src={arrow}/>Back to Login </button></div>
        </>
    )
}


export default Forgot