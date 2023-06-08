import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rotate from "@public/images/rotate.png"
import "@scss/carousel.scss";

export default function ProductLeftSide(props) {
    const [products,SetProducts] =useState([]) 
    useEffect(function(){
        SetProducts(props.data.images)    
    },[props])
    const sliderImages = products.map(product => {
        return (
            <div key={product.id}> 
                <img src={`../images/${product.image}`} /> 
            </div>
        )
    })
    return (
        <div className="position-relative">
            <Carousel autoPlay={true} indicators={false} showStatus={false} infiniteLoop={true}>
                {sliderImages}
            </Carousel>
            <div className="cursol--rotate">
                <img src={rotate} />
            </div>
        </div>
    )
}