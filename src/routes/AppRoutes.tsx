import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home } from '../pages/index'
import {Header,Footer} from '../components/layout/index'

const AppRoutes = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </Router>
);

export default AppRoutes;
