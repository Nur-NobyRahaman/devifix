import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupSigninButton = () => {
    return (
        <div className='container mt-3  text-end pe-5'>
                <Link  to={'/login'}>
                <Button className='rounded-pill  me-3 ps-4 pe-4' variant="danger">Log In</Button>
                </Link>
                <Link  to={'/register'}>
                <Button className='rounded-pill  me-3 ps-4 pe-4' variant="danger">Register</Button>
                </Link>
                
              
            </div>
    );
};

export default SignupSigninButton;