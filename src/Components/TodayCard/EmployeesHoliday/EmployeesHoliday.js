import './EmployeesHoliday.css' ;
import React from 'react';
import { useState, useEffect } from 'react';
import employeeData from '../../../db/db.json'

const EmployeesHoliday = () => {
    // const [todayWorkversary, seTodayWorkversary] = useState([]);
    
    // useEffect(() => {
    //     // Get the current date
    //     const currentDate = new Date();
    
    //     // Filter employees with hiring dates today
    //     const employeesHolidayToday = employeeData.employee.filter((employee) => {
    //         const holidayDate = new Date(employee.hiring_date);
            
    //         return (
    //             hiringDate.getDate() === currentDate.getDate() &&
    //             hiringDate.getMonth() === currentDate.getMonth()
    //         );
    //     });
        
    //     seTodayWorkversary(workeversariesToday);
    // }, []);

    return (
        <>
            <ul className = ' d-flex flex-row  align-items-center fs-3'>
                Employees on holiday today:  
                {/* {todayWorkversary.map((employee) => (
                <li key={employee.id}>{employee.name} {employee.surname} !</li>
                ))} */}
            </ul>
        </>
    )
}

export default EmployeesHoliday;

