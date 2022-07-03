import React from "react";
import Stars from "./Stars";

const ReviewForm = ({submitHandler}) => {

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label>Stars:</label>
                    <Stars name="stars" stars={null} />
                    <label>Comment:</label>
                    <br></br>
                    <textarea cols="50" rows="7" name="comment"/> 
                    <br></br>
                    <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default ReviewForm;