import ReactStars from "react-rating-stars-component";
import "@scss/stars.scss";
export default function StarsRating(props){     
    return(
        <>            
             <ReactStars
                count={5}                
                size={props.starsSize}
                edit={false}
                value={props.rate}
                activeColor="#ffb900"
            />
            
            <div className= {`star--rate ${props.textClass ? props.textClass: ''}`}>{props.rate} of 5</div>
            {props.showReviews && <div className="star--reviews">{props.reviews} Rates</div> }
        </>   
    )
}
StarsRating.defaultProps = {
    showReviews:true,
    starsSize: 30,   
  };