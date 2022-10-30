import { NavLink } from "react-router-dom"
import logo from "../auth/image/logo.svg"

import {ReportIcon,DashboardIcon,Hambugger,LocationIcon,TurnOff,SunSvg} from "./image/SvgIcon"
import { WindIcon,Ic } from "./image/WeatheIcon"
import "./home.css"




const Home=()=>{
    return(
        <><section style={{display:"flex"}}>
                <section className="sidebar">
                    <div style={{display:"flex",}}>
                        <img  className="sidelogo" src={logo}/><h1 style={{marginTop:"auto"}}>Forcasting</h1>
                    </div>
                    <ul >
                        <li><NavLink to="/auth" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} >Main</NavLink></li>
                        <li><NavLink to="/" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><DashboardIcon/>Dashboard</NavLink></li>
                        <li><NavLink to="/auth" className={(navData) => (navData.isActive ? "active-style sidebar-item ":'sidebar-item ')} ><ReportIcon/>Forecast Report</NavLink></li>



                    </ul>
                </section>
                <section style={{width:"100%",borderLeft:"solid 2px gray"}}>
                    <div style={{ display:"flex" ,background:"white",maxHeight:"10vh",justifyContent:"space-between",alignItems:"center"}}>
                        <Hambugger />
                        <div style={{display:"flex" ,gap:"1rem",margin:"0 0.5rem"}}>
                            <div><LocationIcon/></div>
                            <TurnOff/>
                        </div>
                    </div>
                    <div style={{width:"100%" ,marginTop:"3rem"  } }>
                        <div style={{margin: "0 auto",    width: "fit-content"}}>
                            <SunSvg  className="sunSvg"/>
                            <div className="weather-card">
                                <p>Today, 12 September</p>
                                <p style={{fontWeight:" 400",fontSize: "100px",lineHeight: "127px",}}><span>29° </span></p>
                                <p>Cloudy</p>
                                <div style={{height:"min-containt",margin:"auto 0"}}>
                                    <div style={{display: "grid", gridTemplateColumns:" 30% 1% 30%", justifyContent: "center",alignItems: "self-end" }}><div><WindIcon/>Wind</div><hr style={{height:"1rem",margin:"0 3px"}}/><div>10 km/hr</div></div>
                                    <div style={{display: "grid", gridTemplateColumns:" 30% 1% 30%",   justifyContent: "center",alignItems: "self-end" }}><div><Ic/>Hum</div><hr style={{height:"1rem",margin:"0 3px"}}/><div>54%</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}



export default  Home