import '../styles/Shop.css'
import {useEffect, useState} from "react";
import APIService from "../APIService";
import ProductItem from "../components/ProductItem";
import CarouselC from "../components/CarouselC";
import {useTranslation} from "react-i18next";
import Sidebar from "../components/Sidebar";
import {BrowserRouter, useParams} from "react-router-dom";


export const Shop = ({products, setProducts}) => {
    const {t} = useTranslation()
    const [materials, setMaterials] = useState([])
    const [kitchen, setKitchen] = useState([])
    const params = useParams()
    const ct = params["category"]
    const pf = params["pfrom"]
    const pt = params["pto"]
    const kw = params["kword"]
    const [kitchenSelected, setKitchenSelected] = useState(false)

    const searchButtonClicked = (priceFilters, categoryFilters, searchText) => {
        const types = new Map(Object.entries(categoryFilters));
        const dict = {
            "STANDARD": 'STANDARD',
            "STANDARDPLUS": 'STANDARD PLUS',
            "SOLIDDECORATIVELAMINATE": "SOLID DECORATIVE LAMINATE",
            "WORKTOPS": "WORKTOPS",
            "WOODWORKTOPS": "WOOD WORKTOPS",
            "COMPACTLAMINATEWORKTOPS": "COMPACT LAMINATE WORKTOPS",
            "SOLIDACRYLICWORKTOPS": "SOLID ACRYLIC WORKTOPS",
            "SINKS": "SINKS",
            "MIXERS": "MIXERS"
        }
        let type = '';
        types.forEach((value, key) => {
            if (value === true) {
                type += dict[key];
                type += "_";
            }
        });
        type.slice(0, -1);
        let qp = ``;
        if (searchText !== null && searchText !== "")
            qp += `kword=${searchText}&`;
        if (priceFilters[0] !== "")
            qp += `priceFrom=${priceFilters[0]}&`
        if (priceFilters[1] !== "")
            qp += `priceTo=${priceFilters[1]}`
        if (type !== '')
            qp += `&category=${type}`;
        console.log(kitchenSelected)
        if (kitchenSelected)
            APIService.GetFilteredKitchen(qp).then((resp) => {
                console.log(resp)
                setKitchen(resp);
            })
        else
            APIService.GetFilteredMaterials(qp).then((resp) => {
                console.log(resp)
                setMaterials(resp);
            })

    }

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
                <Sidebar handleChange={searchButtonClicked} setKitchenSelected={setKitchenSelected}/>
                <div className="product-list-shop">
                    {/*<h2>{t("home:kitchenEquipment")}</h2>*/}
                    <div className="products-shop">
                        {(kitchenSelected ? kitchen : []).map((p) => (
                            <ProductItem key={p.id} id={p.id} name={localStorage.getItem("lng") === "en" ? p.name_en : p.name_ge} img={p.image} price={p.price}
                                         type="kitchen"/>
                        ))}
                        {(kitchenSelected ? [] : materials).map((p) => (
                            <ProductItem key={p.id} id={p.id} name={localStorage.getItem("lng") === "en" ? p.name_en : p.name_ge} img={p.image} price={p.price_square_meter}
                                         type="material"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}