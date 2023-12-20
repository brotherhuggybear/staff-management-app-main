import './TodayCard.css';
import { HiCake, HiSun } from "react-icons/hi";
import { BiSolidArrowFromRight } from "react-icons/bi";
import Birthday from './Birthdays/Birthdays';
import Workversaries from './Workversaries/Workversaries';
import EmployeesHoliday from './EmployeesHoliday/EmployeesHoliday';
import EmployeesLeave from './EmployeesLeave/EmployeesLeave';


const TodayCard = () => {
    
    return (
        <>
        <div className = 'd-flex today-card flex-column'>
            <h3>Today</h3>
            <ul className='mt-5'>
                <li className = 'd-flex flex-row align-items-center'>
                    <HiCake color = 'orange' size = '30px'/>
                    <Birthday />
                </li>
                <li className = 'd-flex flex-row'>
                    < HiSun color = 'yellow' size = '30px'/>
                    <EmployeesHoliday />
                </li>
                <li className = 'd-flex flex-row align-items-center'>
                    <HiCake color = 'green' size = '30px'/>
                    <Workversaries />
                </li>
                <li className = 'd-flex flex-row align-items-center'>
                    <BiSolidArrowFromRight color = 'red' size = '30px'/>
                    <EmployeesLeave />
                </li>
            </ul>
        </div>
        </>
    )
}

export default TodayCard;