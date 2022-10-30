

import {Hambugger,LocationIcon,TurnOff,SunSvg} from "./image/SvgIcon"
import { WindIcon,Ic } from "./image/WeatheIcon"
import "./home.css"
import { useState } from "react"


const DashBoard=()=>{

    const [city,setCity]=useState({
        "status": true,
        "msg": "live weather",
        "data": {
          "date": "21/05/2020",
          "temperature": "24^C",
          "maxTemperature": "28^C",
          "minTemperature": "21^C",
          "condition": "windy",
          "windSpeed": "15kmph",
          "humidity": "60%"
        }
      })


    return(
        <>
            
            
                    <div style={{width:"100%" ,marginTop:"3rem"  } }>
                        <div style={{margin: "0 auto",    width: "fit-content"}}>
                            <SunSvg  className="sunSvg"/>
                            <div className="weather-card">
                                <p>Today, {city.data.date.slice(0,2)} September</p>
                                <p style={{fontWeight:" 400",fontSize: "100px",lineHeight: "127px",}}><span>{city.data.temperature[0]}{city.data.temperature[1]}° </span></p>
                                <p>{city.data.condition}</p>
                                <div style={{height:"min-containt",margin:"auto 0"}}>
                                    <div style={{display: "grid", gridTemplateColumns:" 30% 1% 30%", justifyContent: "center",alignItems: "self-end" }}><div><WindIcon/>Wind</div><hr style={{height:"1rem",margin:"0 3px"}}/><div>{city.data.windSpeed}</div></div>
                                    <div style={{display: "grid", gridTemplateColumns:" 30% 1% 30%",   justifyContent: "center",alignItems: "self-end" }}><div><Ic/>Hum</div><hr style={{height:"1rem",margin:"0 3px"}}/><div>{city.data.humidity}</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default DashBoard