import './Workversaries.css'
import React from 'react';
import { useState, useEffect } from 'react';
import employeeData from '../../../db/db.json'

const Workversaries = () => {
    const [todayWorkversary, seTodayWorkversary] = useState([]);
    
    useEffect(() => {
        // Get the current date
        const currentDate = new Date();
    
        // Filter employees with birthdays today
        const workeversariesToday = employeeData.employee.filter((employee) => {
            const hiringDate = new Date(employee.hiring_date);
            
            return (
                hiringDate.getDate() === currentDate.getDate() &&
                hiringDate.getMonth() === currentDate.getMonth()
            );
        });
        
        seTodayWorkversary(workeversariesToday);
    }, []);

    return (
        <>
            <ul className = ' d-flex flex-row  align-items-center fs-3'>
                Workversarries today:  {todayWorkversary.map((employee) => (
                <li key={employee.id}>{employee.name} {employee.surname} !</li>
                ))}
            </ul>
        </>
    )
}

export default Workversaries;

