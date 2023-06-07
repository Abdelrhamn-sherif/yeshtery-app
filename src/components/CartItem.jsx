import '@scss/cart-item.scss'
export default function CartItem(props){
    return(
        <>
            <div className="item">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={`../src/images/${props.image}`} width="90" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="item--name">{props.name}</div>
                        <div className="item--quantity">Quantity: {props.quantity}</div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="item--price">{props.price} <span className="small">LE</span> </div>
                            <button className="btn btn-yellow sm">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}