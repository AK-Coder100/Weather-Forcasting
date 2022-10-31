
import './auth.css'
import eye from './image/eye.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Login=()=>{
    const navigate=useNavigate()
    const [hide,setHide]=useState("password")
    const [err,setErr]=useState("")
    const [input,setInput]=useState({
        email:"",
        pass:""
    })

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleLogin=(event)=>{
        event.preventDefault()
        JSON.parse(localStorage.getItem('users')).forEach((elem)=>{ 
            if (elem.email===input.email && elem.password===input.pass){
                localStorage.setItem('user',JSON.stringify(elem) )
                setInput.email=""
                setInput.pass=""
                navigate('/dashboard')
                 
                }else{setErr('Incorrect credentials')}
            })
    }


    return(
        <>

            <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}}>
            <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
            <div  className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value={input.email} onChange={handleChange} required /></div>
            <div className='div-cre'><input  className='input-cre' name='pass' type={hide} placeholder='Password' value={input.pass} onChange={handleChange} required /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
            <div style={{marginLeft:"2rem",textAlign:"left"}}><input type="checkbox" required/> <span>Remember me</span></div>
            <p style={{color:"red"}}>{err}</p>
            <button className='auth-but'  type='submit' >Continue</button>
            </form>
            <br/>
            <Link to="/auth/forgot">Forgot password ?</Link>
            <div className='bottom'><span>Don't have account ?</span><Link to="/auth/signup">sign up </Link></div>
        </>
    )
}


export default Login