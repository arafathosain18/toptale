import React from 'react';
import style from './Home.css'
import img from '../Image/img.jpg'
import useReviews from '../hooks/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div>

            <div className="home-container">
                 <div className="text-container">
                    <h1>The Alchemist Novel by Paulo Coelho</h1>
                    <p>The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988.<br /> Originally written in Portuguese,  it became a widely translated international bestseller</p>
                 </div>

                 <div className="image-container">
                    <img src={img} alt="" />
                 </div>
            </div>
            <div>
                <Review></Review>
            </div>

        </div>
    );
};

export default Home;