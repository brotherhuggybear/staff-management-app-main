import  Navbar  from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Fragment }  from 'react';


const RootPage = () => {
    return (
        <React.Fragment>
            <div className = 'root-layout' >
                <Navbar />
                <div className = 'root-content'>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RootPage;