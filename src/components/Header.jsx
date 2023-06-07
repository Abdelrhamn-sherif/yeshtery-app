import HeaderTop from "@/components/HeaderTop"
import HeaderMid from "@/components/HeaderMid"
import HeaderBottom from "@/components/HeaderBottom"
import "@scss/header.scss"
export default function Navbar(props) {    
    return (
        <>
            <HeaderTop />
            <HeaderMid cartItems={props.cartItems}/>       
            <HeaderBottom />                
        </>
    );
}