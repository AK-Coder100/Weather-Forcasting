import { NavLink, Outlet, useNavigate } from "react-router-dom"
import logo from "../auth/image/logo.svg"
import cut from "./image/cut.png"
import {Hambugger,LocationIcon,TurnOff,SunSvg,BackArrow,DownArrow} from "./image/SvgIcon"

import {ReportIcon,DashboardIcon} from "./image/SvgIcon"
import "./home.css"
import { useEffect, useState } from "react"
import axios from "axios"



const Home=()=>{
    const navigate=useNavigate()
    const [backdrop,setBackdrop]=useState(false)
    const [hide,setHide]=useState(true)
    const [ser,setSer]=useState(false)
    const [loc,setLoc]=useState("Semarang")
    const [search,setSearch]=useState("Semarang")
    const [list,setList]=useState([])


      
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM'
     
const instance = axios.create({
  baseURL:"https://hiring-test.a2dweb.com",
  headers: { Authorization: `bearer ${token}` },
});

const data =async()=>{
    try{
        const j=await instance.get('/city-list?page=1&limit=5', {mode:'cors'})
        setList(j.data.list)
    }
    catch(err){
        console.log(err)
    }
}




      const logout=()=>{
        localStorage.removeItem('user')
        navigate('/auth/login')
    }

    useEffect(()=>{
        if (localStorage.getItem('user')===null){
            navigate('/auth/login')
            
        }else{
            console.log(document.cookie)
        }
        
        data()
    })

    return(
        <>

        {backdrop?(<><div className="backdrop" onClick={()=>{setBackdrop(false)}}>
                
        </div><div className="off-card" >
                    <TurnOff />
                    <h2>Log out</h2>
                    <p style={{fontSize:"small"}}>Are you sure you want to logout from app</p>
                    <div>
                        <button style={{background:"#FF6D6D" , color:"#FFFFFF"}} onClick={logout}>Log out</button><button onClick={()=>{setBackdrop(false)}}>Cancle</button>
                    </div>
                </div></>):<></>
}



        <section style={{display:"flex" ,height:"100vh",background:"linear-gradient(192.05deg, #47BFDF 0%, #4A91FF 100%)"}}>
                <section className={hide?"sidebar sidebar-sm":"sidebar"}>
                    <div style={{display:"flex",}}>
                        <img  className="sidelogo" src={logo} /><h1 style={{marginTop:"auto"}}>Forcasting</h1>
                    </div>
                    <ul >
                        <NavLink to="/auth" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><li>Main</li></NavLink>
                        <NavLink to="/dashboard" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><li><DashboardIcon/> <span> Dashboard</span></li></NavLink>
                        <NavLink to="/forecast-report" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><li><ReportIcon/> Forecast Report</li></NavLink>
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
                            <div style={{display:"flex",   alignItems: "center"}}>
                                <LocationIcon/><span style={{fontSize:"large",margin:"auto 00.5rem"}} onClick={()=>{setSer(!ser)}}>{loc}</span ><DownArrow/>
                                <div className={ser?"ser":"hide"} >
                                    <div className="in-box"><span  onClick={()=>{setSer(false)}}><BackArrow/></span><input  value={search} onChange={()=>{setSearch(event.target.value)}} /></div>
                                    <ul>
                                    {
                                        list.map((e,i)=>{
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