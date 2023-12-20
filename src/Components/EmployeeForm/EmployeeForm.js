import "./EmployeeForm.css";
import React from "react";
import { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {

        const [formClosed, setFormClosed] = useState(false); //urmareste daca formularul este inchis sau nu
        const [employeeData, setEmployeeData] = useState({ //stocheaza datele introduse in formular
            id: '',
            name: '',
            surname: '',
            birth_date: '',
            phone_number: '',
            email: '',
            location: '',
            hiring_date: '',
            job: '',
            salary: ''
        });

        const handleCloseForm = async () => { 
            try {
                await axios.post("http://localhost:3000/employee", employeeData);
                setFormClosed(true); // Close the form after successful POST
            } catch (error) {
                console.error("Error adding employee:", error);
            }
        };

        const handleInputChange = (e) => { //gestioneaza schimbarile din inputurile formularului si actualizeaza employeeData cu noile valori introduse in formular
            const { name, value } = e.target; //destructuram pentru a extrage valorile din e.target
            setEmployeeData({
                ...employeeData,
                [name]: value,
            });
        };

        if (formClosed) { //ne trimite pe homepage dupa inchiderea formularului
            window.location.href = "/homepage";
            return null; // Return null to stop rendering the form
        }


    return (
        <>
            <div className = 'employee-form'>
                <h1 className = 'mb-5'>Introdu datele angajatului</h1>
                <div className = 'employee-details-card'>
                    <div className = 'employee-personal-details'>
                        <h2>Date personale</h2>
                        Nume: <input type = 'text' name="surname" value={employeeData.surname} onChange={handleInputChange}/>
                        Prenume: <input type = 'text' name="name" value={employeeData.name} onChange={handleInputChange} />
                        Data nasterii:<input type = 'text' name="birth_date" placeholder = 'mm.dd.yyyy' value={employeeData.birth_date} onChange={handleInputChange}/>
                        Numar telefon: <input type = 'text' name="phone_number" value={employeeData.phone_number} onChange={handleInputChange}  />
                        Adresa e-mail: <input type = 'text' name="email" value={employeeData.email} onChange={handleInputChange} />
                    </div>
                    <div className = 'employee-work-details '>
                        <h2>Date contractuale</h2>
                        Data angajarii: <input type = 'text' name="hiring_date" value={employeeData.hiring_date} onChange={handleInputChange} />
                        Functia: <input type = 'text' name="job" value={employeeData.job} onChange={handleInputChange}  />
                        Punct de lucru: <input type = 'text' name="location" value={employeeData.location} onChange={handleInputChange} />
                        Salariu angajare: <input type = 'text' name="salary" value={employeeData.salary} onChange={handleInputChange} />
                    </div>
                </div>
                <button type = 'submit' className = 'save-button ' onClick = {handleCloseForm}>Salveaza si inchide</button>
            </div> 
        </>
    );
};

export default EmployeeForm;
