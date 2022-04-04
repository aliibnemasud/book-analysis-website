import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReview] = useState([]);
    useEffect(()=>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[])

    return (
        <div className='container'>
            <h1 className='text-center my-5'>Customer Reviews!</h1>
            <div className="reviews-container">            
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)                    
                }                
            </div>            
        </div>
    );
};

export default Reviews;