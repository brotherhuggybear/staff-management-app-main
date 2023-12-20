import './DisplayQuotes.css';
import { useState, useEffect} from 'react';


const Quotes = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
            fetch('https://type.fit/api/quotes')
            .then((response) => response.json())
            .then((data) => {
                // Choose a random quote from the API data
                const randomIndex = Math.floor(Math.random() * data.length);
                setQuote(data[randomIndex].text);
            });
    }, []);

    return (
        <>
        <div className="quote-container">
            <blockquote>"{quote}"</blockquote>
        </div>
        </>
    )
}

export default Quotes;