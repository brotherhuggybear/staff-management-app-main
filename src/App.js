import './App.css';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import React from 'react';
import RootPage from './pages/RootPage';
import EmployeeEditPage from './pages/EmployeeEditPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import EmployeeFeedbackPage from './pages/EmployeeFeedbackPage';


function App() {
  

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootPage />,
        children: [
          {
            index: true,
            element: < WelcomePage />
          },
          {
            path: 'signUp',
            element: <SignUpPage />
          },
          {
            path: 'homepage',
            element: <Homepage />,
          },
          {
            path: 'employeeForm',
            element: <EmployeeFormPage />
          },
          {
            path: 'employeeEdit/:id',
            element: <EmployeeEditPage />,
          },
          {
            path: 'employeeDetails/:id',
            element: <EmployeeDetailsPage />
          },
          {
            path: 'employeeFeedback/:id',
            element: <EmployeeFeedbackPage />
          }
        ]
      },
      
    ]
  )

  return (
        <React.Fragment >
          <RouterProvider router = {routes} >

          </RouterProvider>
        </React.Fragment>
  );
}

export default App;
