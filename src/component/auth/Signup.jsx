
import './auth.css'
import eye from './image/eye.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Signup=()=>{

    const [hide,setHide]=useState("password")
    const [input,setInput]=useState({
        email:"",
        pass:""
    })

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }


    return(
        <>

            <form style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}}>
            <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
            <div className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value={input.email} onChange={handleChange} /></div>
            <div className='div-cre'><input  className='input-cre' name='pass' type={hide} placeholder='Password'  value={input.pass} onChange={handleChange} /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
            <button className='auth-but' type='submit'  >Continue</button>
            </form>
            <br/>
            <p style={{fontWeight:" 400",fontSize:" 14px",lineHeight: "22px",width:"352px",margin:"auto"}}>By registering you agree to the Forcasting. <a href='/'>Terms of Use</a> and <a href='/'>Privacy Policy.</a></p>
            <div className='bottom'><span>Already have an account ?</span><Link to="/auth/login">Login</Link></div>
        </>
    )
}


export default Signup