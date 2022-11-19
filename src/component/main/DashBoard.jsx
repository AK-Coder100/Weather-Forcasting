

import {Hambugger,LocationIcon,TurnOff,SunSvg} from "./image/SvgIcon"
import { WindIcon,Ic } from "./image/WeatheIcon"
import "./home.css"
import { useEffect, useLayoutEffect, useState } from "react"
import axios from "axios"

// (https://hiring-test.a2dweb.com/live-weather/634f8e6eebecf6f12604ffd4)




const DashBoard=()=>{

const [city,setCity]=useState({
    "status": true,
    "msg": "live weather",
    "data":{"data": {
      "time": "",
      "temperature": 0,
      "maxTemperature": 0,
      "minTemperature": 0,
      "condition": "",
      "windSpeed": 0,
      "humidity": 0
    }}
  })

  const date=new Date
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2MzRmOGM1ZWYxNTVlMjMyYzU1NzVmZDEiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE2NjYxNjIzNDZ9.Ptma5JeNRuRhjtiVQOGun4qpWng-_9q5WjcNmch_AlM'
 
  const instance = axios.create({
    baseURL:"https://hiring-test.a2dweb.com",
    headers: { Authorization: `bearer ${token}` },
  });
  
  async function k (){
    try{
        const j=await instance.get('/live-weather/634f8e6eebecf6f12604ffd4', {mode:'cors'})
        setCity(j)
    }
    catch(err){
      setCity(err)
    }
}


  useEffect(()=>{
    k()
})
  
  
  
return(
    <>
        
        
                <div style={{width:"100%" ,marginTop:"3rem"  } }>
                    <div style={{margin: "0 auto",    width: "fit-content"}}>
                        <SunSvg  className="sunSvg"/>
                        <div className="weather-card">
                            <p>Today, {date.getDate()} {months[date.getMonth()]}</p>
                            <p style={{fontWeight:" 400",fontSize: "100px",lineHeight: "127px",fontFamily:"Overpass"}}><span>{city.data.data.temperature}{city.data.data.temperature[1]}° </span></p>
                            <p>{city.data.data.condition}</p>
                            <div style={{height:"min-containt",margin:"auto 0"}}>
                                <div style={{display: "grid", gridTemplateColumns:" 30% 1% 30%", justifyContent: "center",alignItems: "self-end" }}><div><WindIcon/>Wind</div><hr style={{height:"1rem",margin:"0 3px"}}/><div>{city.data.data.windSpeed} km/hr</div></div>
                                <div style={{display: "grid", gridTemplateColumns:" 30% 1% 30%",   justifyContent: "center",alignItems: "self-end" }}><div><Ic/>Hum</div><hr style={{height:"1rem",margin:"0 3px"}}/><div>{city.data.data.humidity} %</div></div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
)
}

export default DashBoard