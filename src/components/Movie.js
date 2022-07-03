import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from "./ReviewList";

const Movie = ({ movie, addReview }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview(movie.id, e.target.rating.value, e.target.comment.value);
        e.target.reset();
    }

    return (
        <div>
            <div className="movies-container">
                <div>
                    <br></br>
                    <h3><b>{movie.title}</b></h3>
                    <img src={movie.image} alt={movie.alt} style={{minWidth: '10%', height: '20rem'}}/>
                    <br></br>
                    <br></br>
                    
                    <p>{movie.description}</p>
                    <h5>Released: {movie.released}</h5>

                    <ReviewList reviews={movie.reviews} />
                    <h5>Leave a Review</h5>
                    <ReviewForm submitHandler={handleSubmit}/>
                </div>
                <br></br>
            </div>
        </div>
    );
}
export default Movie;