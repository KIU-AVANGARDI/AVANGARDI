import './App.css';
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Homepage";
import Navbar from "./components/Navbar";
import {ErrorPage} from "./pages/Errorpage";
import ProductPage from "./pages/ProductPage";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="products/:type/:id" element = {<ProductPage/>}/>
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
