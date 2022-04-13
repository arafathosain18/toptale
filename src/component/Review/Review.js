import React from 'react';
import useReviews from '../hooks/useReview';
import ReviewBox from '../ReviewBox/ReviewBox';
import style from './Review.css';

const Review = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div>
            <h1>I love Review</h1>

            <div className="review-section">
            {
                reviews.map(review => <ReviewBox
                review={review}
                ></ReviewBox>)
            }
            </div>

        </div>
    );
};

export default Review;