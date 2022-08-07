import '../styles/Homepage.css'
import {useEffect} from "react";
import APIService from "../APIService";
import ProductItem from "../components/ProductItem";

export const HomePage = ({materials, setMaterials, kitchen, setKitchen}) => {

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
        <div className="homepage">
            <div className="product-list">
                <h3>Materials</h3>
                {materials.map((p) => (
                    <ProductItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price}/>
                ))}
            </div>
            <div className="product-list">
                <h3>Kitchen</h3>
                {kitchen.map((p) => (
                    <ProductItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price}/>
                ))}
            </div>
        </div>
    )
}