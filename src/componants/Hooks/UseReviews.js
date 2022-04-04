import { useEffect, useState } from "react";

const UseReviews = () => {
    const [reviews, setReview] = useState([]);
    useEffect(()=>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return [reviews, setReview];
}

export default UseReviews;
