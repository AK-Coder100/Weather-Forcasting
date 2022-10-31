
import './auth.css'
import cross from './image/cross.svg'
import logo from './image/logo.svg'
import { Outlet } from 'react-router-dom'


const Auth=()=>{
    

    return(
        <><div style={{height:"100vh"}}>
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