import CartItem from "@/components/CartItem";
export default function CartItems(props){
    const itemsObj = props.items;    
    const items = itemsObj.map(item => {
        return (
            <CartItem 
                key={item.id}
                image={item.image}
                name={item.name} 
                quantity={item.quantity} 
                price={item.price} 
            />
        )
        
    })
    return(
        <>
            {items}
        </>
    )
}