import React from 'react';
import banner from '../assets/img/capture.png';
import '../css/HomePage.css';

function HomePage() {
    return (
        <div className="container">
            <img src={banner} alt="Yamaha R15" />
        </div>
    );
}

export default HomePage;
