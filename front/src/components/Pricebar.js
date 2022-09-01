import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

export default function Pricebar() {
    const [valueMax, setValueMax] = useState(25);
    const [valueMin, setValueMin] = useState(0);

    return (
        <div>
            <br />
            <p style={{ color: "black" }}>მინიმალური ფასი</p>
            <RangeSlider
                value={valueMin}
                min="0"
                max="25"
                onChange={(changeEvent) => setValueMin(changeEvent.target.value)}
            />
            <br />
            <p style={{ color: "black" }}>მაქსიმალური ფასი</p>
            <RangeSlider
                value={valueMax}
                min="0"
                max="25"
                onChange={(changeEvent) => setValueMax(changeEvent.target.value)}
            />
            <h4 style={{ color: "black" }}>
                {valueMin} - {valueMax}ლარი/(კგ,ლი)
            </h4>
        </div>
    );
}
