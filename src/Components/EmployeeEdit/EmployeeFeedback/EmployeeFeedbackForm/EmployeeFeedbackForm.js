import './EmployeeFeedbackForm.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeeFeedbackForm = (props) => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [savedFeedback, setSavedFeedback] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });

      const updatedFeedback = [...savedFeedback, input];

      const response = await axios.put(`http://localhost:3000/employee/${id}`, {
        ...employeeData,
        feedback: updatedFeedback
      });

      setEmployeeData({ ...employeeData, feedback: updatedFeedback });
      setInput('');
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.error('Error updating feedback:', error);
      // Handle error appropriately, such as displaying an error message to the user
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/employee/${id}`);
        const employee = response.data;
        setEmployeeData(employee);
        setSavedFeedback(employee.feedback || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately, such as displaying an error message to the user
      }
    };

    fetchData();
  }, [id]);
      
  if (!employeeData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        {props.edit ? (
          <>
            <div className='feedback-form'>
              <textarea type='text' value={input} onChange={handleChange} placeholder='Update your feedback here...' />
              <button className='add-button' onClick={handleSubmit}>Update</button>
            </div>
          </>
        ) : (
          <>
            <div className='feedback-form'>
              <textarea type='text' value={input} onChange={handleChange} placeholder='Write your feedback here...' />
              <button className='add-button' onClick={handleSubmit}>Add</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default EmployeeFeedbackForm;
