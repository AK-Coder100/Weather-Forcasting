import { NavLink, Outlet } from "react-router-dom"
import logo from "../auth/image/logo.svg"
import cut from "./image/cut.png"
import {Hambugger,LocationIcon,TurnOff,SunSvg,BackArrow} from "./image/SvgIcon"

import {ReportIcon,DashboardIcon} from "./image/SvgIcon"
import "./home.css"
import { useState } from "react"




const Home=()=>{

    const [backdrop,setBackdrop]=useState(false)
    const [hide,setHide]=useState(true)
    const [ser,setSer]=useState(false)
    const [loc,setLoc]=useState("Semarang")
    const [search,setSearch]=useState("Semarang")
    const list={
        "msg": "list of all cities",
        "list": [
          {
            "name": "Kolkata",
            "state": "west bengal",
            "country": "india"
          },
          {
            "name": "Koata",
            "state": "west bengal",
            "country": "india"
          },
          {
            "name": "Alipurduar",
            "state": "west bengal",
            "country": "india"
          },
          {
            "name": "Behala",
            "state": "west bengal",
            "country": "india"
          }
        ]
      }

      


    return(
        <>

        {backdrop?(<><div className="backdrop" onClick={()=>{setBackdrop(false)}}>
                
        </div><div className="off-card" >
                    <TurnOff />
                    <h2>Log out</h2>
                    <p style={{fontSize:"small"}}>Are you sure you want to logout from app</p>
                    <div>
                        <button style={{background:"#FF6D6D" , color:"#FFFFFF"}}>Log out</button><button onClick={()=>{setBackdrop(false)}}>Cancle</button>
                    </div>
                </div></>):<></>
}



        <section style={{display:"flex" ,height:"100vh"}}>
                <section className={hide?"sidebar sidebar-sm":"sidebar"}>
                    <div style={{display:"flex",}}>
                        <img  className="sidelogo" src={logo} /><h1 style={{marginTop:"auto"}}>Forcasting</h1>
                    </div>
                    <ul >
                        <li><NavLink to="/auth" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} >Main</NavLink></li>
                        <li><NavLink to="/dashboard" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><DashboardIcon/>Dashboard</NavLink></li>
                        <li><NavLink to="/forecast-report" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><ReportIcon/>Forecast Report</NavLink></li>



                    </ul>
                    <div style={{textAlign:"center",position:"absolute",bottom: "20px"}}>
                        <img style={{width:"80%" ,rotate:"-15deg"}} src={cut}></img>
                        <button className="upgrad-but" style={{width:"80%"}} >Upgrade to pro</button>
                    </div>
                    

                </section>
                <section style={{width:"100%",borderLeft:"solid 2px gray",overflow:"auto"}}>
                    <div style={{ display:"flex" ,background:"white",maxHeight:"10vh",justifyContent:"space-between",alignItems:"center",position:" sticky",top: "0"}}>
                        <span onClick={()=>{setHide(!hide)}} ><Hambugger /></span>
                        <div style={{display:"flex" ,gap:"1rem",margin:"0 0.5rem"}}>
                            <div>
                                <LocationIcon/><span style={{fontSize:"large",margin:"auto 00.5rem"}} onClick={()=>{setSer(!ser)}}>{loc}</span >
                                <div className={ser?"ser":"hide"} >
                                    <div className="in-box"><span  onClick={()=>{setSer(false)}}><BackArrow/></span><input  value={search} onChange={()=>{setSearch(event.target.value)}} /></div>
                                    <ul>
                                    {
                                        list.list.map((e,i)=>{
                                            if (search.length>0){
                                                if ( new RegExp(`^(?=.*(${search.toLowerCase()}))`).test(e.name.toLowerCase()) ){
                                                    return <li key={i} onClick={()=>{setLoc(e.name)}}><LocationIcon/><span>{e.name}</span></li>

                                                }
                                            }else{
                                                return <li  onClick={()=>{setLoc(e.name)}}  key={i}><LocationIcon/><span>{e.name}</span></li>
                                            }
                                          })
                                    }
                                    </ul>
                                </div>
                            </div>
                            <span onClick={()=>{setBackdrop(true) }}><TurnOff /></span>
                        </div>
                    </div>


                    <Outlet/>
                </section>
            </section>
        </>
    )
}



export default  Home