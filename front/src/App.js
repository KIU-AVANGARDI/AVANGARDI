import './App.css';
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Homepage";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="" element={<HomePage/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
