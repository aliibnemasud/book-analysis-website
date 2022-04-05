import { faChartPie} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-info'>     
         <div className="footer-content container">
         <p className='text-light'>All right reserved - Ali Ibne Masud</p>
         <p className='text-light'> <FontAwesomeIcon icon={faChartPie} ></FontAwesomeIcon> </p>
                   
        </div>

        </footer>
    );
};

export default Footer;