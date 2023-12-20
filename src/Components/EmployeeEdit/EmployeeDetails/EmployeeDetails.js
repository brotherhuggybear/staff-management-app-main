import './EmployeeDetails.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams  } from 'react-router-dom';
import EmployeePersonalDetails from './EmployeePersonalDetails/EmployeePersonalDetails';
import EmployeeEmploymentDetails from './EmployeeEmploymentDetails/EmployeeEmploymentDetails';

const EmployeeDetails = (props) => {

    const {id} = useParams();
    const [employeeData, setEmployeeData] = useState({});
    console.log(id);


    useEffect(() => {
        axios.get(`http://localhost:3000/employee/${id}`)
            .then((res) => {
                const employee = res.data;
                console.log(employee)
                setEmployeeData(employee);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [id])

    console.log(employeeData);
    
   
    if (!employeeData) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <header>
            <h2>{employeeData.name} {employeeData.surname}</h2>
            <h4>{employeeData.location}</h4>
        </header>
        <div className = 'details-container'>
            <div className = 'details-containers'>
                <EmployeePersonalDetails />
                <EmployeeEmploymentDetails />
            </div>
            
        </div>
        
        </>
    )
}

export default EmployeeDetails;