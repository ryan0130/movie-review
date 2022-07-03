import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({stars}) => {
    const [rating, setRating] = useState(stars);
    const [hover, setHover] = useState(null);

    return (
        <div className="star">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick= {() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className="star-icon"
                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )
} 
export default Stars;