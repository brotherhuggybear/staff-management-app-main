import './Birthdays.css';
import React from 'react';
import { useState, useEffect }  from 'react';
import employeeData from '../../../db/db.json';

const Birthday = () => {
    const [todayEmployees, setTodayEmployees] = useState([]);
    
    useEffect(() => {
        // Get the current date
        const currentDate = new Date();
    
        // Filter employees with birthdays today
        const employeesToday = employeeData.employee.filter((employee) => {
            const birthday = new Date(employee.birth_date);
            
            return (
                birthday.getDate() === currentDate.getDate() &&
                birthday.getMonth() === currentDate.getMonth()
            );
        });
        
        setTodayEmployees(employeesToday);
    }, []);

    return (
        <>
            <ul className = ' d-flex flex-row  align-items-center fs-3'>
                Birthdays today: {todayEmployees.map((employee) => (
                <li key={employee.id}>{employee.name} {employee.surname} !</li>
                ))}
            </ul>
        </>
    )
}

export default Birthday;

