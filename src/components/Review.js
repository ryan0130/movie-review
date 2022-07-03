import Stars from "./Stars";

const Review = ({review}) => {
    return (
        <ul>
            <li className="list-group-item">
                <Stars stars={review.stars} />
                <br></br>
                <p className="review">{review.comment}</p>
            </li>
        </ul>
    );
}
export default Review;