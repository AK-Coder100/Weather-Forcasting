import { BrowserRouter,Routes,Route } from "react-router-dom";
import Auth from "./component/auth/Auth";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import Reset from "./component/auth/reset";



const App=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/auth" element={<Auth/>}>
                    <Route exact path="/auth/" element={<Signup/>} />
                    <Route exact path="/auth/signup" element={<Signup/>} />
                    <Route exact path="/auth/login" element={<Login/>} />
                    <Route exact path="/auth/reset" element={<Reset/>} />
                </Route>
            </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default App