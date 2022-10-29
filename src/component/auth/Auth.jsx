
import './auth.css'
import cross from './image/cross.svg'
import logo from './image/logo.svg'
import { Outlet } from 'react-router-dom'


const Auth=()=>{


    return(
        <>
            <div className='card'>
                <button className='cross-but'><img src={cross}></img> </button>
                    <div><img src={logo}></img></div>
                    <p style={{fontSize: "large",fontWeight: "bolder"}}>Forcasting</p>
                    
                <div >
                    <Outlet/>

                    {/* <form style={{display:"flex",flexDirection:"column",gap:"1rem",width:"max-containt"}}>
                    <p style={{color:"gray" ,margin:"0.5rem"}}>Enter email address and password</p>
                    <div className='div-cre'><input className='input-cre' type="text" placeholder='Email' /></div>
                    <div className='div-cre'><input  className='input-cre' type={hide} placeholder='Password' /><img style={{width:"1.5rem"}} src={eye} onClick={()=>{setHide(hide==="password"?"text":"password")}} /></div>
                    <div style={{marginLeft:"2rem",textAlign:"left"}}><input type="checkbox"/> <span>Remember me</span></div>
                    <button className='auth-but'  >Continue</button>
                    </form>
                    <br/>
                    <Link to="/">Forgot password ?</Link>

                    <div className='bottom'><span>Don't have account ?</span><Link to="/">sign up </Link></div> */}
                </div>
            </div>
        </>
    )
}


export default Auth