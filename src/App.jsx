import { BrowserRouter,Routes,Route } from "react-router-dom";
import Auth from "./component/auth/Auth";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import Reset from "./component/auth/reset";
import Forgot from "./component/auth/forgot";
import LoginVerify from "./component/auth/LoginVerify";
import SignupVerify from "./component/auth/SignupVerify";
import Home from "./component/main/Home";
import DashBoard from "./component/main/DashBoard";
import ForecastReport from "./component/main/ForecastReport";



const App=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} >
                    <Route exact path="/dashboard" element={<DashBoard/>} />
                    <Route exact path="/forecast-report" element={<ForecastReport/>} />
                </Route>
                <Route exact path="/auth" element={<Auth/>}>
                    <Route exact path="/auth/" element={<Signup/>} />
                    <Route exact path="/auth/signup" element={<Signup/>} />
                    <Route exact path="/auth/signup/verify" element={<SignupVerify/>} />
                    <Route exact path="/auth/login" element={<Login/>} />
                    <Route exact path="/auth/forgot" element={<Forgot/>} />
                    <Route exact path="/auth/login/verify" element={<LoginVerify/>} />
                    <Route exact path="/auth/reset" element={<Reset/>} />
                </Route>
            </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default App