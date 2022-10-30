
import './auth.css'
import verify from './image/verify.svg'
import arrow from './image/arrow.svg'
import { useNavigate } from 'react-router-dom'

const LoginVerify=()=>{
    const navigate=useNavigate()

   

    return(
        <>

           <img style={{marginTop:"6rem"}} src={verify}/>
           <h2 style={{marginTop:"1rem"}}>Verify your email</h2>
           <p style={{padding:"4rem"}}>We have successfully submitted your request for the tour of Green Garden Aparment. You’ll be updated soon.</p>
            <br/>
            <div className='bottom'><button  className='back-but' onClick={()=>{navigate("/auth/login")}}><img className='arrow-icon' src={arrow}/>Back to Login </button></div>
        </>
    )
}


export default LoginVerify