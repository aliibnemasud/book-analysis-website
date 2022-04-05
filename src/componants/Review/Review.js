import React from 'react';
import './Review.css';

const Review = (props) => {    
    const {name, review, rating, picture} = props.review;
    return (
        <div className='review-container'>
            <img src={picture} alt="" />
            <div className="review-info">
                <h2 className='text-info'>{name}</h2>
                <p>{review}</p>
                <h4 className='text-warning'>Rating: {rating}</h4>
            </div>
        </div>              
    );
};

export default Review;