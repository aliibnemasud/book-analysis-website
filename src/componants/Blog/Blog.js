import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Questions and answers!</h1>
            <h2>What is context API?</h2>
            <p>Context API enables to share unique information without multiple prop-drilling. It is added on react version 16.3. By using context API we can share state across the entire app.</p>
            <h2>What is Semantic tags?</h2>
            <p>Semantic tags HTML or semantic markup language that introduces meaning to the web page rather than just presentation. It is very easy to understood when someone use semantic tag to there web application for a developer. It started with the title tag.</p>
            <h2>What is inline block?</h2>
            <p>An inline element only takes up as much as the content. The inline-block value is incredibly useful when wanting to control margin and padding on "inline" elements without the need to 'block and float' them.</p>
        </div>
    );
};

export default Blog;