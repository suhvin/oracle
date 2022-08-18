import Home from "../routes/Home";
import { HashRouter as Router, Route, Routes, Redirect } from "react-router-dom";



const AppRouter = () => {
    return(
        <Router> 
            {/* <Navigation/> */}
            <Routes> 
                <>
                <Route path='/' element={<Home/>}/> 
                </>
            </Routes>
        </Router>
    );
};
export default AppRouter;