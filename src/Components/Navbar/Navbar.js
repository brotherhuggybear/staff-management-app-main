import "./Navbar.css";
import logo from '../../assets/logo alb.png';
import React from 'react';
import {useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import {  useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);
        
        const userSignOut = () => {
            signOut(auth).then(() => {
                navigate('/');
            }).catch(error => console.log(error))
        }
    
    return (
                <nav className = 'd-flex justify-content-between align-items-center px-5 py-3 '>
                    <a href='/homepage'><img src={logo} alt=''></img></a>
                    <h3 id='nav-text' >Your staff management wizzard</h3>
                    <div className = 'd-flex align-items-end flex-column'>
                        { authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button className = 'bg-info p-2 rounded-1' onClick = {userSignOut} >Sign out</button></> : <p>Signed Out</p>}
                    </div>
                </nav>
    );
};

export default Navbar;
