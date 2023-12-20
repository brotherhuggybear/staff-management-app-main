import "./EmployeeEdit.css";
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeEdit = (props) => {

    const {id} = useParams();
    const [employeeData, setEmployeeData] = useState();
    
    useEffect(() => {
        axios.get(`http://localhost:3000/employee/${id}`)
            .then((res) => {
                const employee = res.data;
                setEmployeeData(employee);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [id])

    console.log(employeeData)

    if (!employeeData) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <header>
            <h2>{employeeData.name} {employeeData.surname}</h2>
            <h4>{employeeData.location}</h4>
        </header>
        <div className = 'table-container'>
            <table className = 'table-employee-details'>
                <tr>
                    <td>
                        <NavLink to= {`/employeeDetails/${id}`} >
                            <button className = 'employee-details-btn'>
                                Detalii angajat
                            </button>
                        </NavLink >
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink to= {`/employeeFeedback/${id}`} >
                            <button className = 'employee-details-btn'>
                                Feedback
                            </button>
                        </NavLink >
                    </td>
                </tr>
                <tr>
                    <td>Detalii salariale</td>
                </tr>
                <tr>
                    <td>Concedii</td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default EmployeeEdit;