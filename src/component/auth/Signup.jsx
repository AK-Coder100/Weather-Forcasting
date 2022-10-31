
import './auth.css'
import eye from './image/eye.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Signup=()=>{
    const navigate=useNavigate()
    const [hide,setHide]=useState("password")
    const [input,setInput]=useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleSignUp=(event)=>{
        event.preventDefault()
        const l=JSON.parse(localStorage.getItem('users'))
        localStorage.setItem('users',JSON.stringify([...l,input]))
        console.log([...l,input])
        localStorage.setItem('user',JSON.stringify([input]))
        setInput({
            email:"",
            password:""
        })
        navigate('/dashboard')
        } 

    return(
        <>

            <form onSubmit={handleSignUp} style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}} >
                <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
                <div className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value={input.email} onChange={handleChange} required /></div>
                <div className='div-cre'><input  className='input-cre' name='password' type={hide} placeholder='Password'  value={input.password} onChange={handleChange} required /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
                <button className='auth-but' type='submit'  >Continue</button>
            </form>
            <br/>
            <p style={{fontWeight:" 400",fontSize:" 14px",lineHeight: "22px",width:"352px",margin:"auto"}}>By registering you agree to the Forcasting. <a href='/'>Terms of Use</a> and <a href='/'>Privacy Policy.</a></p>
            <div className='bottom'><span>Already have an account ?</span><Link to="/auth/login">Login</Link></div>
        </>
    )
}


export default Signup