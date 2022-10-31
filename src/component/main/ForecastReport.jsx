
import { useState } from "react"
import "./home.css"
import { SunSvg,CalenderIcon } from "./image/SvgIcon"
import "./report.css"


const ForecastReport=()=>{

    const [forecast,setForcast]=useState(
        {
            "FORECAST": [
              {
                "sunday": {
                  "date": "22/05/2021",
                  "temperature": "21^C"
                },
                "monday": {
                  "date": "23/05/2021",
                  "temperature": "25^C"
                },
                "tuesday": {
                  "date": "24/05/2021",
                  "temperature": "23^C"
                },
                "wednesday": {
                  "date": "25/05/2021",
                  "temperature": "23^C"
                },
                "thursday": {
                  "date": "26/05/2021",
                  "temperature": "24^C"
                },
                "friday": {
                  "date": "27/05/2021",
                  "temperature": "23^C"
                },
                "saturday": {
                  "date": "28/05/2021",
                  "temperature": "24^C"
                }
              },{
                "sunday": {
                  "date": "22/05/2021",
                  "temperature": "21^C"
                },
                "monday": {
                  "date": "23/05/2021",
                  "temperature": "25^C"
                },
                "tuesday": {
                  "date": "24/05/2021",
                  "temperature": "23^C"
                },
                "wednesday": {
                  "date": "25/05/2021",
                  "temperature": "23^C"
                },
                "thursday": {
                  "date": "26/05/2021",
                  "temperature": "24^C"
                },
                "friday": {
                  "date": "27/05/2021",
                  "temperature": "23^C"
                },
                "saturday": {
                  "date": "28/05/2021",
                  "temperature": "24^C"
                }
              },{
                "sunday": {
                  "date": "22/05/2021",
                  "temperature": "21^C"
                },
                "monday": {
                  "date": "23/05/2021",
                  "temperature": "25^C"
                },
                "tuesday": {
                  "date": "24/05/2021",
                  "temperature": "23^C"
                },
                "wednesday": {
                  "date": "25/05/2021",
                  "temperature": "23^C"
                },
                "thursday": {
                  "date": "26/05/2021",
                  "temperature": "24^C"
                },
                "friday": {
                  "date": "27/05/2021",
                  "temperature": "23^C"
                },
                "saturday": {
                  "date": "28/05/2021",
                  "temperature": "24^C"
                }
              },{
                "sunday": {
                  "date": "22/05/2021",
                  "temperature": "21^C"
                },
                "monday": {
                  "date": "23/05/2021",
                  "temperature": "25^C"
                },
                "tuesday": {
                  "date": "24/05/2021",
                  "temperature": "23^C"
                },
                "wednesday": {
                  "date": "25/05/2021",
                  "temperature": "23^C"
                },
                "thursday": {
                  "date": "26/05/2021",
                  "temperature": "24^C"
                },
                "friday": {
                  "date": "27/05/2021",
                  "temperature": "23^C"
                },
                "saturday": {
                  "date": "28/05/2021",
                  "temperature": "24^C"
                }
              }
            ]
          }
    )

    const mydata=forecast.FORECAST.map((val)=>val)
    const maydata1=mydata.map((val)=>val)
    console.log(maydata1)

          

    return(
        <>
        
            <p style={{padding:"2rem",color:"white"}}><span style={{fontWeight: "800",fontSize: "32px",lineHeight: "39px"}} >Today</span>     <span style={{fontWeight: "700",fontSize: "24px",lineHeight: "29px"}} >sep ,12</span></p>
            <div style={{display:"flex"}}>
                <div className="weather-card" style={{width:"7rem",height:"10rem",margin:"0 1rem "}}>
                    <p>29°C</p>
                    <div className="sm-icon" ><SunSvg /></div>
                    <p>15.00</p>
                </div>
                <div className="weather-card" style={{width:"7rem",height:"10rem",margin:"0 1rem "}}>
                    <p>29°C</p>
                    <div className="sm-icon" ><SunSvg /></div>
                    <p>15.00</p>
                </div>
                <div className="weather-card" style={{width:"7rem",height:"10rem",margin:"0 1rem "}}>
                    <p>29°C</p>
                    <div className="sm-icon" ><SunSvg /></div>
                    <p>15.00</p>
                </div>
                <div className="weather-card" style={{width:"7rem",height:"10rem",margin:"0 1rem "}}>
                    <p>29°C</p>
                    <div className="sm-icon" ><SunSvg /></div>
                    <p>15.00</p>
                </div>
                <div className="weather-card" style={{width:"7rem",height:"10rem",margin:"0 1rem "}}>
                    <p>29°C</p>
                    <div className="sm-icon" ><SunSvg /></div>
                    <p>15.00</p>
                </div>
            </div>

            <p style={{padding:"2rem",color:"white"}}><span style={{fontWeight: "800",fontSize: "32px",lineHeight: "39px"}} >Next Forecast</span>      <CalenderIcon/>  </p>
          


          <div className="table">
          <div  className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
              <div>sept,13  </div>
              <div><SunSvg/></div>
              <div>21°</div>
            </div>
            <div  className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
              <div>sept,14  </div>
              <div><SunSvg/></div>
              <div>21°</div>
            </div>
            <div  className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
              <div>sept,15  </div>
              <div><SunSvg/></div>
              <div>21°</div>
            </div>
            <div  className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
              <div>sept,15  </div>
              <div><SunSvg/></div>
              <div>21°</div>
            </div>
            <div  className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
              <div>sept,16  </div>
              <div><SunSvg/></div>
              <div>21°</div>
            </div>
            <div  className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
              <div>sept,17  </div>
              <div><SunSvg/></div>
              <div>21°</div>
            </div>
            {
              forecast.FORECAST.map((e,i)=>{
                return(
                          <div key={i} className="table-com" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0.5rem"}}>
                              <div>sept,13 </div>
                              <div><SunSvg/></div>
                              <div>21°</div>
                          </div>
                )
              })
            }

          </div>

        </>
    )
}



export default ForecastReport