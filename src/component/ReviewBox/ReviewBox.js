import React from 'react';
import style from './ReviewBox.css';

const ReviewBox = (props) => {

    const {name,review,rating} = props.review;
    return (
        <div>

            <div className="review-container">
            <h3>Name: {name}</h3>
            <p>Review: {review}</p>
            <h3>Rating: {rating}</h3>
            </div>
        </div>
    );
};

export default ReviewBox;