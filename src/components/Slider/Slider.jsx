import React, { useState } from 'react'
import "../Slider/Slider.css"
import { Carousel } from "react-bootstrap"
import { sliderData } from "../../utils/data"

function Slider() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    return (
        <>
            <div className="slider-section">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        sliderData.map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img src={item.image} alt="" className="img-fluid" />

                                    <Carousel.Caption className='carousel_caption'>
                                        <h3 className='main-heading' dangerouslySetInnerHTML={{__html:item.heading}}></h3>
                                        <p className='mt-3'>{item.title}</p>
                                        <button className="btn primary-btn mt-4">
                                            Show Now
                                            <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </Carousel.Caption>
                                </Carousel.Item>


                            )
                        })}
                </Carousel>
            </div>

        </>
    )
}

export default Slider