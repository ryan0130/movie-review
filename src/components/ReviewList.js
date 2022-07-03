import Review from "./Review";

const ReviewList = ({reviews}) => {
    
    return (
        <div>
            {
            reviews.map((review, index) => {
                return <Review key={index} review={review} />
            })
            }
        </div>
    );
}

export default ReviewList;