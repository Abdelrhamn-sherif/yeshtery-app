import { useState } from "react"
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
export default function Root() {    
    const [cartItems, setCartItems] = useState([
        {
            id: 1, 
            image: 'product-1-small.png', 
            name: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
            quantity: 1,
            price: 9999           
        },      
        {
            id: 2, 
            image: 'product-1-small.png', 
            name: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
            quantity: 2,
            price: 9999,
           
        },      
    ])
    return (
        <>
            <Header cartItems={cartItems} />
            <Outlet />        
        </>
    );
}