import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate('/homepage');
    } 
    const handleShow = () => setShow(true);

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            handleShow();
        } ).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
        <div className = 'd-flex justify-content-center mt-5'>
            <form onSubmit = {signUp} className = 'd-flex flex-column  w-25 '>
                <h3 className = 'text-center'>Sign up here!</h3>
                <input type="email" placeholder="Enter your email" value = {email} onChange = { (e) => setEmail(e.target.value)} className = 'mt-3' />
                <input type="password" placeholder="Enter your password" value = {password} onChange = { (e) => setPassword(e.target.value)} className = 'mt-3' />
                <Button type = 'submit' className = 'bg-info mt-1' >Sign Up</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body className = 'fs-2'>Te-ai inregistrat cu succes!</Modal.Body>
                    <Button variant="secondary" className = 'bg-info' onClick={handleClose}>
                            Close
                    </Button>
                </Modal>
            </form>
        </div>
    </>
    )
}

export default SignUp;


