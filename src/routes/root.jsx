import { useState } from "react"
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
export default function Root() {
    const [cartItems, setCartItems] = useState([])
    const addItem = (formData, product) => {
        setCartItems((oldCartItems) => {
            const newItems = [...cartItems];
            const itemIndex = oldCartItems.findIndex(item => item.id == product.id);
            if (itemIndex !== -1) {                
                newItems[itemIndex].quantity += formData.quantity; 
                return newItems;
            }
            newItems.push({...product, quantity: formData.quantity});
            return newItems;                          
        })
    }
    return (
        <>
            <Header cartItems={cartItems} />
            <Outlet context={[cartItems, addItem]} />
        </>
    );
}