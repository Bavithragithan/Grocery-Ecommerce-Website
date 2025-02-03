import React, { useState } from 'react';
import "../Slider/Slider.css";
import { Carousel } from "react-bootstrap";
import { sliderData } from "../../utils/data";

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="slider-section">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause="hover">
                {sliderData.map((item, i) => (
                    <Carousel.Item key={i}>
                        <img src={item.image} alt="Slide" className="img-fluid carousel-image" />
                        <Carousel.Caption className="carousel-caption">
                            <h3 className="main-heading" dangerouslySetInnerHTML={{ __html: item.heading }}></h3>
                            <p className="mt-3">{item.title}</p>
                            <button className="btn primary-btn mt-4">
                                Show Now →
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;
