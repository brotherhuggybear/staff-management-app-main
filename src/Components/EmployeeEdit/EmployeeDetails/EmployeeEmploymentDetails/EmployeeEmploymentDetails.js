import "./EmployeeEmploymentDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmploymentFiles from "./EmploymentFiles/EmploymentFiles";

const EmployeeEmploymentDetails = (props) => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [job, setJob] = useState('');
  const [fileOption, setFileOption] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isFileOptionModified, setIsFileOptionModified] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  
  const handleJobClick = () => {
    setIsEditing(true);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
    setIsEdited(true);
    console.log(e.target.value);
  };
  const handleFileChange = (e) => {
    setFileOption(e.target.value);
    setIsFileOptionModified(true);
    console.log(e.target.value);
  };

  const handleSaveClick = () => {
    // Update the info in the database
    axios
      .put(`http://localhost:3000/employee/${id}`, {
        ...employeeData,
        job: job,
        dosar_la_locatie: fileOption,
      })
      .then((res) => {
        // Update the state with the new email value
        setEmployeeData({ ...employeeData, job });
        setIsEditing(false);
        setIsFileOptionModified(false);
        // setIsEdited(false);
      })
      .catch((error) => {
        console.error("Error updating email:", error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/${id}`)
      .then((res) => {
        const employee = res.data;
        console.log(employee);
        setEmployeeData(employee);
        setJob(employee.job);
        setFileOption(employee.dosar_la_locatie || " ");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  console.log(employeeData);

  if (!employeeData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="employment-details">
        <h2 id="detalii-personale">Detalii angajare</h2>
        <h4>
          Data angajarii:{" "}
          <input
            className="details-fields"
            type="text"
            value={employeeData.hiring_date}
          />{" "}
        </h4>
        <h4>
          Salariu angajare:{" "}
          <input
            className="details-fields"
            type="text"
            value={employeeData.salary}
          />
        </h4>

        {isEditing ? (
          <div>
            <h4>
              Functie:{" "}
              <input
                className="details-fields"
                type="text"
                value={job}
                onChange={handleJobChange}
              />
            </h4>
            {isEdited && <button onClick={handleSaveClick}>Save</button>}
          </div>
        ) : (
          <div>
            <h4>
            Functie:{" "}
              <input
                className="details-fields"
                type="text"
                value={job}
                readOnly
                onClick={handleJobClick}
              />
            </h4>
          </div>
        )}
    
        <h4 className="dosar-select" >
          Dosar la locatie:
          <select className="select-options" value={fileOption} onChange={handleFileChange}>
            {/* <option value ={employeeData.dosar_la_locatie}></option> */}
            <option value="Da">Da</option>
            <option value="Nu">Nu</option>
          </select>
          {isFileOptionModified && <button onClick={handleSaveClick}>Save</button>}
        </h4>
        <EmploymentFiles />
      </div>
    </>
  );
};

export default EmployeeEmploymentDetails;
