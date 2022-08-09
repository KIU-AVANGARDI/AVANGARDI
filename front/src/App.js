import './App.css';
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Homepage";
import Navbar from "./components/Navbar";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="" element={<HomePage/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
