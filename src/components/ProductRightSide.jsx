import { useState } from 'react'
import StarsRating from '../components/StarsRating'
import { useOutletContext } from "react-router-dom";

import '@scss/product.scss'
export default function ProductRightSide(props) {
    const productData = props.data;
    const sizesArr = productData.sizes;
    const colorsArr = productData.colors;
    const [cartItems, addItem] = useOutletContext();
    const [formData, setFormData] = useState({
        'size': "medium",
        'color': "default",
        'quantity': 1
    })
    const sizes = sizesArr.map(size => {
        return (
            <label  key={size.id} className="radio-container ">
                <div className="radio--text">{size.name}</div>
                <input
                    type="radio"
                    name="size"
                    value={size.name}
                    checked={formData.size == size.name}
                    onChange={handleChange}                    
                />
                <span className="checkmark"></span>
            </label>
        )
    })
    const colors = colorsArr.map(color => {
        return (
            <label key={color.id} className="radio-container me-3">
                <div className="radio--image">
                    <img src={color.defaultImage} />
                </div>
                <input
                    type="radio"
                    name="color"
                    value={color.name}
                    checked={formData.color == color.name}
                    onChange={()=> {handleChange(event), props.handleClick(event)}}
                />
                <span className="checkmark image"></span>
            </label>
        )
    })
    function handleChange(event) {
        const { name, type, value, checked } = event.target;        
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    
    function handleIncrement() {
        setFormData(prevData => {
            return {
                ...prevData,
                quantity: prevData.quantity + 1
            }
        })
    }
    function handleSubtract() {
        setFormData(prevData => {
            return {
                ...prevData,
                quantity: prevData.quantity - 1
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        addItem(formData, productData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <img src={productData.brandImage} width="60" />
            <div className="product--name">{productData.name}</div>
            <div className="product--category">{productData.mainCategory}</div>
            <div className="d-flex align-items-center">
                <StarsRating rate={productData.rate} reviews={productData.reviews} />
            </div>
            <div className="d-flex align-items-center border-bottom pb-4">
                <div className="product--price" >{productData.price} <span className="small">LE</span></div>
                <div className="product--discount">{productData.price} LE</div>
                <div className='product--discount-amount'>{productData.discount}% Off</div>
            </div>
            <div className="pt-4 border-bottom pb-4">
                <div className="product--section-title">Size</div>
                <div className="d-flex mt-3">
                    {sizes}                 
                </div>
            </div>
            <div className="pt-4 pb-5 border-bottom">
                <div className="product--section-title">Color</div>
                <div className="d-flex mt-3">
                    {colors}

                </div>
            </div>
            <div className="pt-4">
                <div className="product--section-title">Quantity</div>
                <div className='position-relative product--quantity--div mt-2'>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="form-control product--quantity"
                    />
                    <div className="product--counter increment"
                        onClick={handleIncrement}
                    >
                        +
                    </div>
                    <div className="product--counter subtract"
                        onClick={handleSubtract}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 pt-4">
                    <button className="btn btn-purple w-100 mt-3">Add To Cart</button>

                </div>
                <div className="col-12 col-md-6 pt-4">
                    <button className='btn btn-yellow w-100 mt-3'>Pickup From Store</button>
                </div>
            </div>
        </form>
    )
}