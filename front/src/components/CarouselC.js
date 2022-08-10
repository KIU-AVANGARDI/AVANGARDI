import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/CarouselC.css"
import img2 from  "../assets/images/2.png"
import img3 from  "../assets/images/3.png"
import img4 from  "../assets/images/4.png"
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselC() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselC;