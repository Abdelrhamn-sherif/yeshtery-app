import { useState, useEffect } from 'react'
import '@scss/similar-products.scss';
import productsData from "../services/products";
export default function SimilarProducts(props) {
    const allProducts = productsData.data;
    const productsId = props.products;    
    var [allRelatedProducts, setAllRelatedProducts]=useState([]);
    useEffect(function(){
        setAllRelatedProducts([]);
        for(let i =0; i < productsId.length; i++ ){
           for(let q = 0; q < allProducts.length; q++){                
                if (productsId[i] == allProducts[q].id) { 
                    setAllRelatedProducts(prevState => {
                        return [...prevState, allProducts[q]]
                    });                                                                    
                }
           }
            
        }
    }, [])   
    console.log(allRelatedProducts);
    return (
        <>
            <div className="section--title">Similar Products</div>
            <div className="section--subtitle">You may like these products also</div>    
        </>
    )
}