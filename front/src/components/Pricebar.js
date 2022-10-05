import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import {useTranslation} from "react-i18next";

export default function Pricebar({priceFilters, setPriceFilters }) {
    const {t} = useTranslation()
    return (
        <div>
            <br />
            <p style={{ color: "black" }}>{t("sidebar:minprice")}</p>
            <RangeSlider
                value={priceFilters[0]}
                min="0"
                max="1000"
                onChange={(changeEvent) => setPriceFilters(0, changeEvent.target.value)}
            />
            <br />
            <p style={{ color: "black" }}>{t("sidebar:maxprice")}</p>
            <RangeSlider
                value={priceFilters[1]}
                min="0"
                max="1000"
                onChange={(changeEvent) => setPriceFilters(1, changeEvent.target.value)}
            />
            <h4 style={{ color: "black" }}>
                {priceFilters[0]} - {priceFilters[1]} ₾
            </h4>
        </div>
    );
}
