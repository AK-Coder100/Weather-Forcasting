
import './auth.css'
import cross from './image/cross.svg'
import logo from './image/logo.svg'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'


const Auth=()=>{
    const users={
        "email": "suman@email.com",
        "password": "Password@123"
      }

    useEffect(()=>{
        if (localStorage.getItem('users')===null){
            localStorage.setItem('users',JSON.stringify([users]))
        }else{}})

    return(
        <><div style={{minHeight:"100vh",overflow:"auto"}}>
            <div className='card'>
                <button className='cross-but'><img src={cross}></img> </button>
                    <div><img src={logo}></img></div>
                    <p style={{fontSize: "large",fontWeight: "bolder"}}>Forcasting</p>
                    
                <div style={{    position: "relative",height: "-webkit-fill-available"}} >

                    
                    <Outlet/>

                   
                </div>
            </div>
            </div>
        </>
    )
}


export default Auth