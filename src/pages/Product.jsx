import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import productsData from "../services/products";
import ProductLeftSide from "../components/ProductLeftSide";
import ProductRightSide from "../components/ProductRightSide";
import SimilarProducts from "../components/SimilarProducts";
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Product(props) {
  const productsArr = productsData.data;
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct ] = useState(productsArr.find(product => product.id == id)); 
  
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0])  
  function handleColorChanged(event){
    const {value} = event.target;       
    setSelectedColor(selectedProduct.colors.find(color => color.name == value))
  } 
  useEffect(function(){
    setSelectedProduct(productsArr.find(product => product.id == id))
  }, [id])
  useEffect(function(){
    setSelectedColor(selectedProduct.colors[0])
  }, [selectedProduct])
  return (
    <>
      <Breadcrumbs
          text={selectedProduct.breadCrumbs}
      />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-6">                       
            <ProductLeftSide data={selectedColor}/>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <ProductRightSide handleClick={handleColorChanged} data={selectedProduct}/>
          </div>
        </div>
        <SimilarProducts products={selectedProduct.relatedProducts} />
      </div>
    </>
  );
}