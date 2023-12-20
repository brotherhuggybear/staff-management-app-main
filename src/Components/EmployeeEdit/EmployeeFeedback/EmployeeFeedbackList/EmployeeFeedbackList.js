import "./EmployeeFeedbackList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmployeeFeedbackForm from "../EmployeeFeedbackForm/EmployeeFeedbackForm";
import EmployeeFeedback from "../EmployeeFeedback";

const EmployeeFeedbackList = (props) => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (text) => {
    if (!text || /^\s*$/.test(text)) {
      return;
    }

    const newFeedbacks = [text, ...feedbacks];

    setFeedbacks(newFeedbacks);
  };

  const updateFeedback = (index, newValue) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }

    setFeedbacks((prev) =>
      prev.map((item, i) => (i === index ? newValue : item))
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/${id}`)
      .then((res) => {
        const employee = res.data;
        setEmployeeData(employee);
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
      <header>
            <h2>{employeeData.name} {employeeData.surname}</h2>
            <h4>{employeeData.location}</h4>
      </header>
      <div className="feedback-list">
        <h1>Feedback</h1>
        <div className="feedback-forms">
          <EmployeeFeedbackForm onSubmit={addFeedback} />
          <EmployeeFeedback
            feedbacks={feedbacks}
            updateFeedback={updateFeedback}
            setFeedbacks={setFeedbacks}
          />
        </div>

      </div>
    </>
  );
};

export default EmployeeFeedbackList;
