import SignInPage from './SignInPage'
import Button from 'react-bootstrap/Button';

const WelcomePage = () => {
    return (
        <div>
            <div className = 'd-flex flex-column align-items-center mt-5 '>
                <h2 className = 'fs-2 text'>Bine ai venit! </h2>
                <p className = 'fs-4 text'>Pentru a avea acces la informatiile angajatilor, logheaza-te aici:</p>
            <SignInPage />
            </div>
            <div className = 'd-flex flex-column align-items-center mt-5'>
                <p className = 'fs-2 text'>Nu ai un cont? Creeaza unul aici:</p>
                <a href = '/signUp'><Button variant="info">Sign Up</Button>{' '}</a>
            </div>
        </div>
    )
}

export default WelcomePage;