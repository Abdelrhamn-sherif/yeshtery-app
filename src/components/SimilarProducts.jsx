import { useState, useEffect } from 'react'
import SimilarProduct from './SimilarProduct';
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
    }, [props])   
    const relatedProducts = allRelatedProducts.map(relatedProduct => {
        return (
                <SimilarProduct key={relatedProduct.id} product={relatedProduct} />
        )
    }); 
    return (
        <>
            <div className="section--title">Similar Products</div>
            <div className="section--subtitle">You may like these products also</div>  
            <div className="d-flex overflow-auto decoration-none mb-5">
                {relatedProducts}  

            </div>
        </>
    )
}