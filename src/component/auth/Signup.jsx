
import './auth.css'
import eye from './image/eye.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Signup=()=>{
    const navigate=useNavigate()
    const [hide,setHide]=useState("password")
    const [input,setInput]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        country:"India"
    })
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM'
    const instance = axios.create({
        baseURL:"https://hiring-test.a2dweb.com",
        headers: { Authorization: `bearer ${token}` },
      });
    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleSignUp=async(event)=>{
        event.preventDefault()
        // const l=JSON.parse(localStorage.getItem('users'))
        // localStorage.setItem('users',JSON.stringify([...l,input]))
        // localStorage.setItem('user',JSON.stringify([input]))
        setInput({
            name:"",
            email:"",
            phone:"",
            password:"",
            country:"India"
        })
        try{
            const j=await instance.post('/create-user',input, {mode:'cors'})
            console.log(j)
            localStorage.setItem('user',JSON.stringify(input) )
            document.cookie="auth=true"
            setInput.email=""
            setInput.pass=""
            navigate('/dashboard')
        }
        catch(err){
            console.log(err)
        }
        // navigate('/dashboard')   
        } 

    return(
        <>

            <form onSubmit={handleSignUp} style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}} >
                <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
                <div className='div-cre'><input className='input-cre' name='name' type="text" placeholder='Name' value={input.name} onChange={handleChange} required /></div>
                <div className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value={input.email} onChange={handleChange} required /></div>
                <div className='div-cre'><input className='input-cre' name='phone' type="number" placeholder='Phone' value={input.phone} onChange={handleChange} required /></div>
                <div className='div-cre'><input  className='input-cre' name='password' type={hide} placeholder='Password'  value={input.password} onChange={handleChange} required /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
                {/* <div className='div-cre'><input className='input-cre' name='email' type="text" placeholder='Email' value='India' onChange={}/></div> */}
                <button className='auth-but' type='submit'  >Continue</button>
            </form>
            <br/>
            <p style={{fontWeight:" 400",fontSize:" 14px",lineHeight: "22px",width:"352px",margin:"auto"}}>By registering you agree to the Forcasting. <a href='/'>Terms of Use</a> and <a href='/'>Privacy Policy.</a></p>
            <div className='bottom'><span>Already have an account ?</span><Link to="/auth/login">Login</Link></div>
        </>
    )
}


export default Signup