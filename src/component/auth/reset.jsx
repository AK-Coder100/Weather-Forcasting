
import './auth.css'
import eye from './image/eye.svg'
import arrow from './image/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Reset=()=>{

    const [hide,setHide]=useState("password")
    const [chide,setCHide]=useState("password")
    const [input,setInput]=useState({
        pass:"",
        cpass:""
    })
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }


    return(
        <>

            <form style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}}>
            <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
            <div className='div-cre'><input  className='input-cre' name='pass' type={hide} placeholder='Password' value={input.pass} onChange={handleChange} /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
            <div className='div-cre'><input  className='input-cre' name='cpass' type={chide} placeholder='Password' value={input.cpass} onChange={handleChange} /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setCHide(chide==="password"?"text":"password")}} /></div>
            <button className='auth-but'  type='submit' >Reset Password</button>
            </form>
            <br/>
            <div className='bottom'><button  className='back-but' onClick={()=>{navigate("/auth/login")}}><img className='arrow-icon' src={arrow}/>Back to Login </button></div>
        </>
    )
}


export default Reset