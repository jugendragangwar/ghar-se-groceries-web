import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home } from '../pages/index'
import {Header,Footer} from '../components/layout/index'
import Register from "../auth/Register";
import Userlogin from "../auth/Userlogin";

const AppRoutes = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/User-login" element={<Userlogin />} />
        </Routes>
        <Footer/>
    </Router>
);

export default AppRoutes;
