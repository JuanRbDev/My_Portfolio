import React, { useState, useEffect } from 'react';
import '../css/HomePage.css';
function HomePage() {
    
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const professions = ['FRONT-END', 'ANDROID'];

    useEffect(() => {
        let timeout;
        if (isAnimating) {
            timeout = setTimeout(() => {
                setDisplayedText(professions[textIndex]);
                setIsAnimating(false);
            }, 1000); // Duración de la animación de escritura
        } else {
            timeout = setTimeout(() => {
                setIsAnimating(true);
                setTextIndex((prevIndex) => (prevIndex + 1) % professions.length);
            }, 3000); // Tiempo en que el texto permanece antes de cambiar
        }

        return () => clearTimeout(timeout);
    }, [isAnimating, textIndex]);

    return (
        <div>
            <div className="container">
                <div className="box_text">
                    <h3>Hello, I'm a</h3>
                    <h1 id='profesion' className={isAnimating ? 'fade-out' : 'fade-in'}>
                        {displayedText}
                    </h1>
                    <h2>DEVELOPER</h2>
                    <button>About Me</button>
                </div>

            </div>
        </div>
    );
}

export default HomePage;
