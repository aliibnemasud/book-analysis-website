import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {    
    const {name, review, rating, picture} = props.review;
    return (
        <div className='review-container'>
            <img src={picture} alt="" />
            <div className="review-info">
                <h2>{name}</h2>
                <p>{review}</p>
                <h3>Rating: {rating}</h3>
            </div>
        </div>
        // <Card style={{ width: '18rem' }} className='m-3'>
        //     <Card.Img variant='top' className='h-2 w-2 roundedCircle' src={picture} />
        //     <Card.Body>
        //         <Card.Title>{name}</Card.Title>
        //         <Card.Text>{review}</Card.Text>
        //         <p>Rating: {rating}</p>
        //     </Card.Body>
        // </Card>       
    );
};

export default Review;