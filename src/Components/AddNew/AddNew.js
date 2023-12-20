import './AddNew.css';
import { FiPlusCircle } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const AddNew = () => {
    return (
        <>
            <div className = 'add-new-button'>
                <h3>Add new</h3>
                <NavLink to="/employeeForm">
                    <button>
                        <FiPlusCircle color='#40E0D0' size='40px' />
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default AddNew;