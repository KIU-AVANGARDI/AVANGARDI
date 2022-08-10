import '../styles/Homepage.css'
import {useEffect,useState} from "react";
import APIService from "../APIService";
import ProductItem from "../components/ProductItem";
import CarouselC from "../components/CarouselC";

export const HomePage = () => {

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
        <>
            <CarouselC/>
            {/*<button className="carousel-button">see our projects</button>*/}
            <div className="homepage">
                <div className="product-list">
                    <h2>Materials</h2>
                    <div className="products">
                        {materials.map((p) => (
                            <ProductItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price_square_meter}/>
                        ))}
                    </div>
                </div>
                <div className="product-list">
                    <h2>Kitchen</h2>
                    <div className="products">
                        {kitchen.map((p) => (
                            <ProductItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}