import "./EmployeePersonalDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeePersonalDetails = (props) => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isEdited, setIsEdited] = useState(false);

  const handleEmailClick = () => {
    setIsEditing(true);
  };
  const handlePhoneClick = () => {
    setIsEditing(true);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEdited(true);
  };
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setIsEdited(true);
  };

  const handleSaveClick = () => {
    // Update the values in the database
    axios
      .put(`http://localhost:3000/employee/${id}`, {
        ...employeeData,
        email: email,
        phone_number: phoneNumber,
      })
      .then((res) => {
        // Update the state with the new email value
        setEmployeeData({ ...employeeData, email, phoneNumber });
        setIsEditing(false);
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
        setEmployeeData(employee);
        setEmail(employee.email);
        setPhoneNumber(employee.phone_number);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!employeeData) {
    return <p>Loading...</p>;
  }
  
  return (
    <>
      <div className="personal-details">
        <h2 id="detalii-personale">Detalii personale</h2>
        <h4>
          Data nasterii:{" "}
          <input
            className="details-fields"
            type="text"
            value={employeeData.birth_date}
          />{" "}
        </h4>


        {isEditing ? (
          <div>
            <h4>
              Adresa e-mail:{" "}
              <input
                className="details-fields"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </h4>
            <h4>
            Numar telefon:{" "}
              <input
                className="details-fields"
                type="text"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </h4>
            {isEdited && <button onClick={handleSaveClick}>Save</button>}
          </div>
        ) : (
          <div>
            <h4>
              Adresa e-mail:{" "}
              <input
                className="details-fields"
                type="text"
                value={email}
                readOnly
                onClick={handleEmailClick}
              />
            </h4>
            <h4>
            Numar telefon:{" "}
              <input
                className="details-fields"
                type="text"
                value={phoneNumber}
                readOnly
                onClick={handlePhoneClick}
              />
            </h4>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeePersonalDetails;
