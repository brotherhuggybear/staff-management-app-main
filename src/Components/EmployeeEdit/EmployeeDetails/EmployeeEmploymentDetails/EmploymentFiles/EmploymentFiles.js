import './EmploymentFiles.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmploymentFiles = (props) => {
    const { id } = useParams();
    const [employeeData, setEmployeeData] = useState({});
    const [checkboxAM, setCheckboxAM] = useState();
    const [checkboxCI, setCheckboxCI] = useState();
    const [checkboxCN, setCheckboxCN] = useState();
    const [checkboxDIP, setCheckboxDIP] = useState();
    const [checkboxCV, setCheckboxCV] = useState();
    const [checkboxMM, setCheckboxMM] = useState();
    const [checkboxPM, setCheckboxPM] = useState();
    const [checkboxIG, setCheckboxIG] = useState();
    const [isCheckboxChanged, setIsCheckboxChanged] = useState(false);


    const handleCheckboxChange = (checkboxName) => {
        let isChecked = false;
    
        switch (checkboxName) {
            case 'A.M.':
                setCheckboxAM(!checkboxAM);
                isChecked = true;
                break;
            case 'C.I.':
                setCheckboxCI(!checkboxCI);
                isChecked = true;
                break;
            case 'C.N.':
                setCheckboxCN(!checkboxCN);
                isChecked = true;
                break;
            case 'DIP.':
                setCheckboxDIP(!checkboxDIP);
                isChecked = true;
                break;
            case 'CV':
                setCheckboxCV(!checkboxCV);
                isChecked = true;
                break;
            case 'M.M.':
                setCheckboxMM(!checkboxMM);
                isChecked = true;
                break;
            case 'P.M.':
                setCheckboxPM(!checkboxPM);
                isChecked = true;
                break;
            case 'IG':
                setCheckboxIG(!checkboxIG);
                isChecked = true;
                break;
            

        }
    
        if (isChecked) {
            setIsCheckboxChanged(true);
        }
    }

        const handleSaveClick = () => {
            // Update the info in the database
            axios
                .put(`http://localhost:3000/employee/${id}`, {
                    ...employeeData,
                    check_box_AM: checkboxAM,
                    check_box_CI: checkboxCI,
                    check_box_CN: checkboxCN,
                    check_box_DIP: checkboxDIP,
                    check_box_CV: checkboxCV,
                    check_box_MM: checkboxMM,
                    check_box_PM: checkboxPM,
                    check_box_IG: checkboxIG
                })
                .then((res) => {
                    // Update the state with the new email value
                    setEmployeeData({ ...employeeData });
                    setIsCheckboxChanged(false);
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
                        setCheckboxAM(employee.check_box_AM);
                        setCheckboxCI(employee.check_box_CI);
                        setCheckboxCN(employee.check_box_CN);
                        setCheckboxDIP(employee.check_box_DIP);
                        setCheckboxCV(employee.check_box_CV);
                        setCheckboxMM(employee.check_box_MM);
                        setCheckboxPM(employee.check_box_PM);
                        setCheckboxIG(employee.check_box_IG);
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
                }, [id]);

    

    return (
        <>
        <div>
            <h4>
            Acte angajare:
            <div className="acte-angajare">
                <span>
                <input type="checkbox" name="A.M." className="input-check" checked={checkboxAM} onChange={() => handleCheckboxChange("A.M.")} />
                <label for="A.M.">A.M.</label>
                </span>
                <span>
                <input type="checkbox" name="C.I." className="input-check" checked={checkboxCI} onChange={() => handleCheckboxChange("C.I.")} />
                <label for="C.I.">C.I.</label>
                </span>
                <span>
                <input type="checkbox" name="C.N." className="input-check" checked={checkboxCN} onChange={() => handleCheckboxChange("C.N.")} />
                <label for="C.N.">C.N.</label>
                </span>
                <span>
                <input type="checkbox" name="DIP." className="input-check" checked={checkboxDIP} onChange={() => handleCheckboxChange("DIP.")} />
                <label for="DIP.">DIP.</label>
                </span>
                <span>
                <input type="checkbox" name="CV" className="input-check" checked={checkboxCV} onChange={() => handleCheckboxChange("CV")} />
                <label for="CV">CV</label>
                </span>
                <span>
                <input type="checkbox" name="M.M." className="input-check" checked={checkboxMM} onChange={() => handleCheckboxChange("M.M.")} />
                <label for="M.M.">M.M.</label>
                </span>
                <span>
                <input type="checkbox" name="P.M." className="input-check" checked={checkboxPM} onChange={() => handleCheckboxChange("P.M.")} />
                <label for="P.M.">P.M.</label>
                </span>
                <span>
                <input type="checkbox" name="IG" className="input-check" checked={checkboxIG} onChange={() => handleCheckboxChange("IG")} />
                <label for="IG">IG</label>
                </span>
                {isCheckboxChanged && <button onClick={handleSaveClick}>Save</button>}
            </div>
        </h4>
        </div>
        </>
    )
}

export default EmploymentFiles