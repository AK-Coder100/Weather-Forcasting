
import './auth.css'
import eye from './image/eye.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Login=()=>{
    const navigate=useNavigate()
    const [hide,setHide]=useState("password")
    const [err,setErr]=useState("")
    const [input,setInput]=useState({ email:"",password:""})
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM'
 
const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}



const instance = axios.create({
  baseURL:"https://hiring-test.a2dweb.com",
  headers: { Authorization: `bearer ${token}` },
});



const handleLogin=async(event)=>{
    event.preventDefault()
    try{
        const j=await instance.post('/login',input, {mode:'cors'})
        console.log(j)
        localStorage.setItem('user',JSON.stringify(input) )
        document.cookie="auth=true"
        setInput.email=""
        setInput.pass=""
        navigate('/dashboard')
    }
    catch(err){
        console.log(err)
        setErr('Incorrect credentials')
    }
        
}


    return(
        <>

            <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}}>
                <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
                <div  className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value={input.email} onChange={handleChange} required /></div>
                <div className='div-cre'><input  className='input-cre' name='password' type={hide} placeholder='Password' value={input.password} onChange={handleChange} required /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
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