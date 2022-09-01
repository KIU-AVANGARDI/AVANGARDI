import '../styles/Shop.css'
import {useEffect, useState} from "react";
import APIService from "../APIService";
import ProductItem from "../components/ProductItem";
import CarouselC from "../components/CarouselC";
import {useTranslation} from "react-i18next";
import Sidebar from "../components/Sidebar";


export const Shop = () => {
    const {t} = useTranslation()
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
        <div>
            <div className="shop-page">
                <Sidebar/>
                <div className="product-list-shop">
                    {/*<h2>{t("home:kitchenEquipment")}</h2>*/}
                    <div className="products-shop">
                        {kitchen.map((p) => (
                            <ProductItem key={p.id} id={p.id} name={p.name} img={p.image} price={p.price}
                                         type="kitchen"/>
                        ))}
                        {materials.map((p) => (
                            <ProductItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price_square_meter} type = "material"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}