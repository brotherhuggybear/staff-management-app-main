import TodayCard from "../Components/TodayCard/TodayCard";
import EmployeeCards from "../Components/EmployeeCards/EmployeeCards";
import Quotes from "../Components/Quotes/DisplayQuotes";


const Homepage = () => {
    return (
        <div>
            <Quotes />
            <TodayCard />
            <EmployeeCards />  
        </div>
    )
}

export default Homepage;