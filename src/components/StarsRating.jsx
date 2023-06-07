import ReactStars from "react-rating-stars-component";
import "@scss/stars.scss";
export default function StarsRating(props){     
    return(
        <>            
             <ReactStars
                count={5}                
                size={30}
                edit={false}
                value={props.rate}
                activeColor="#ffb900"
            />
            <div className="star--rate">{props.rate} of 5</div>
            <div className="star--reviews">{props.reviews} Rates</div>
        </>   
    )
}