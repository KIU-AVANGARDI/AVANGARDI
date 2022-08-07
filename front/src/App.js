import './App.css';
import Footer from "./components/Footer";
import ProductItem from "./components/ProductItem";
import {useEffect, useState} from "react";
import APIService from "./APIService";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Homepage";

function App() {

    const [materials, setMaterials] = useState([])
    const [kitchen, setKitchen] = useState([])

    useEffect(() => {
        APIService.GetAllMaterials().then((resp) => {
            setMaterials(resp);
        })
    }, [])

    useEffect(() => {
        APIService.GetAllKitchen().then((resp) => {
            setKitchen(resp);
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="" element={<HomePage materials={materials} setMaterials={setMaterials} kitchen={kitchen} setKitchen={setKitchen}/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
