import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomeLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <CustomLink to="/">Home</CustomLink>            
            <CustomLink to="/review">Review</CustomLink>            
            <CustomLink to="/dashboard">Dashboard</CustomLink>            
            <CustomLink to="/blogs">Blogs</CustomLink>            
            <CustomLink to="/about">About</CustomLink>                      
        </nav>
    );
};

export default Header;