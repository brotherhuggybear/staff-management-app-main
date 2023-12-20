import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            navigate('/homepage');
        } ).catch((error) => {
            console.log(error)
        })
    }



    return (
        <>
        <form onSubmit = {signIn} className = 'd-flex flex-column w-25'>
            <input type="email" placeholder="Enter your email" value = {email} onChange = { (e) => setEmail(e.target.value)} className = 'mt-3'/>
            <input type="password" placeholder="Enter your password" value = {password} onChange = { (e) => setPassword(e.target.value)} className = 'mt-3' />
            <Button type = 'submit' className = 'bg-info text-dark mt-1'>Log In</Button>
        </form>
    </>
    )
}

export default SignIn;


