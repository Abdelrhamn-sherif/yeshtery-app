import rotate from "@public/images/rotate.png"
import StarsRating from '@/components/StarsRating'
import { Link } from "react-router-dom";
export default function SimilarProduct(props) {
    const product = props.product;
    return (
        <Link className="similar-product position-relative d-flex flex-column justify-content-between" to={`/products/${product.id}`} replace={false}>
                <div>
                    <img className="img lg" src={product.defaultImage} />
                    <div className="cursol--rotate">
                        <img src={rotate} />
                    </div>
                    <div className="name">
                        {product.name}
                    </div>
                </div>
                
                <div className="body px-2 px-md-2">
                  
                    <div className="d-flex align-items-center">
                        <div>
                            <div className="price">
                                {product.price} <span className="small fw-medium">Le</span>
                            </div>
                            <div className="discount d-flex align-items-center">
                                <div className="amount">{product.price} LE</div>
                                <div className="padge">{product.discount}%</div>
                            </div>
                        </div>
                        <div className="ms-auto">
                            <img src={product.brandImage} width="56" />
                        </div>
                    </div>
                    <div className="mt-2 d-flex align-items-center justify-content-center">
                        <StarsRating
                            rate={product.rate}
                            reviews={product.reviews}
                            showReviews={false}
                            starsSize={29}
                            textClass={'small pt-1'}
                        />
                    </div>
                </div>
                <div className="pickup d-flex justify-content-center align-items-center">Pickup From: <span className="lg">Genena Mall</span></div>
        </Link>
    )
}