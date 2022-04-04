import React from 'react';
import './Home.css';
import book from '../img/bookk.png';
import { Button } from 'react-bootstrap';
import Review from '../Review/Review';
import CustomLink from '../CustomeLink/CustomLink';
import UseReviews from '../Hooks/UseReviews';

const Home = () => {
    const [reviews] = UseReviews();
    const threeReviews = reviews.slice(0, 3);

    return (
        <div>
            <section className='home-conatainer'>
                <div className='text-conatainer'>
                    <h1>Steal Like an Artist A concise, inspiring guide for creators</h1>
                    <p>Steal Like an Artist: 10 Things Nobody Told You About Being Creative by Austin Kleon is a wonderful little book that is designed for anyone who is ever has had a desire to create something amazing, but doesn’t know where to start.</p>
                    <Button variant='success' className="px-2 py-1">Live Link</Button>
                </div>
                <img src={book} alt="" />
            </section>

            <div className='reviews-container container'>
            {
                threeReviews.map(review => <Review
                key={review.id} review={review}
                ></Review> )                
            }
            </div>

            <div className='text-center'>
            <CustomLink to="/review"><Button variant="primary" className='my-5 ml-0'>All Reviews</Button></CustomLink>  
            </div>
        </div>
    );
};

export default Home;