import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Homepage";
import Navbar from "./components/Navbar";
import {ErrorPage} from "./pages/Errorpage";
import ProductPage from "./pages/ProductPage";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import ForgotPass from "./pages/ForgotPass";
import AboutUs from "./pages/AboutUs";
import Vacancy from "./pages/Vacancy";
import {Cart} from "./pages/Cart";
import {Shop} from "./pages/Shop";
import Contact from "./pages/Contact";
import CartItem from "./components/CartItem"
import Calculator from "./components/Calculator";
import FAQ from "./pages/FAQ";


function App() {

    return (

        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/vacancy" element={<Vacancy/>} />
                    <Route path="/about-us" element={<AboutUs/>} />
                    <Route path="products/:type/:id" element = {<ProductPage/>}/>
                    <Route path="*" element={<ErrorPage/>} />
                    <Route path="/authorization" element={<Authorization/>} />
                    <Route path="/registration" element={<Registration/>} />
                    <Route path="/forgot-pass" element={<ForgotPass/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/shop/:category/:pfrom/:pto/:kword" element={<Shop/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/calculator" element={<Calculator/>} />
                    <Route path="/faq" element={<FAQ/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
