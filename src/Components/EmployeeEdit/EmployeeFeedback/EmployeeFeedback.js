import "./EmployeeFeedback.css";
import React from "react";
import { useState, useEffect } from "react";
import EmployeeFeedbackForm from "./EmployeeFeedbackForm/EmployeeFeedbackForm";
// import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { useParams } from "react-router-dom";


const EmployeeFeedback = ({ feedbacks, updateFeedback, props }) => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [savedFeedback, setSavedFeedback] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // const [feedbackDate, setFeedbackDate] = useState(new Date());
  // useEffect(() => {
  //   setFeedbackDate(new Date());
  // }, []);


  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/${id}`)
      .then((res) => {
        const employee = res.data;
        setEmployeeData(employee);
        setSavedFeedback(employee.feedback);
        
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [savedFeedback, id]);


  if (!employeeData) {
    return <p>Loading...</p>;
  }

  const submitUpdate = (value) => {
    updateFeedback(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <EmployeeFeedbackForm edit={edit} onSubmit={submitUpdate} />;
  }

  return employeeData.feedback && employeeData.feedback.length > 0 ? (savedFeedback.map((feedback, index) => (
    <div key={index} className="feedback">
      {/* <p>{feedbackDate.toLocaleString()}</p> */}
      <p>{employeeData.feedback[index]}</p>
    </div>
  ))
  ) : (
    <p>No feedback available</p>
  )
};

export default EmployeeFeedback;
