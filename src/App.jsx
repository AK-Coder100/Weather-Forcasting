import { BrowserRouter,Routes,Route } from "react-router-dom";
import Auth from "./component/auth/Auth";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import Reset from "./component/auth/reset";
import Forgot from "./component/auth/forgot";
import LoginVerify from "./component/auth/LoginVerify";
import SignupVerify from "./component/auth/SignupVerify";



const App=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>} />
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