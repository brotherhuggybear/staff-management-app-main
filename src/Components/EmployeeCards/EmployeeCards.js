import { useEffect, useState } from 'react';
import './EmployeeCards.css';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import React from 'react';
import axios from 'axios';
import AddNew from '../AddNew/AddNew';

const EmployeeCards = () => {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState('');
    // const [filteredCards, setFilteredCards] = useState([]);
    const [filter, setFilter] = useState('');
    
    
    useEffect(() => {
        axios.get('http://localhost:3000/employee')
            .then((res) => {
                if(res.status === 200){
                    console.log(res.data);
                    setCards(res.data)
                } else {
                    throw new Error(res.statusText)
                }
            })
            .catch((error) => {
                setError(error);
            })
    }, [])

    const filteredCards = cards.filter((card) => {
        const locationMatch = card.location.toLowerCase().includes(filter.toLowerCase());
        const jobTitleMatch = card.job.toLowerCase().includes(filter.toLowerCase());

        return locationMatch || jobTitleMatch; 
    })
    

    return (
        <React.Fragment>
            <div>
                <div className = "d-flex justify-content-between m-4">
                    <input type = 'text' value = {filter} onChange = {(e) => setFilter(e.target.value)} placeholder = 'Filter employees by job title or by location' className = 'filter-input'/>
                    <AddNew />
                </div>
                
                <div className = 'cards-container'>
                    {filteredCards.length > 0
                    ? filteredCards.map((card) => (
                        <EmployeeCard 
                                key = {card.id}
                                id = {card.id}
                                name = {card.name}
                                surname = {card.surname}
                                location = {card.location}
                                job = {card.job}
                            />
                    ))
                : !error && cards.map((card) => (
                    <EmployeeCard 
                                key = {card.id}
                                id = {card.id}
                                name = {card.name}
                                surname = {card.surname}
                                location = {card.location}
                                job = {card.job}
                            />
                ))}
                    {
                        error && <p>Bad request</p>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmployeeCards;