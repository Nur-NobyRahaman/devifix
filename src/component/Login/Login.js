import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login_img from '../../images/loginn'
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className='row pt-5 mt-5 field'>
            <div className='loginDevifixField  container col-sm-6'>
                <h1 className='py-4 text-light ms-4 text-start'>DeviFix</h1>
                <img className='w-75 my-3 img' src={login_img} alt="" />
            </div>

            <div className='loginField mb-3 col-sm-6'>
                <Form >
                <Button className='rounded-pill me-5 my-5' style={{backgroundColor:' orangered',}} variant="danger">User work</Button>

                <Button className='rounded-pill my-5' style={{backgroundColor:' orangered',}} variant="danger">User pro</Button>
                <h1 className='ms-2 text-start'>Login to your Account</h1>
                    <Form.Group className="mt-5" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="my-3" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="REMEMBER ME" />
                    </Form.Group>
                    <Button className='w-100 mb-3' style={{backgroundColor:' orangered',border:'none'}} type="submit" >
                        SIGN IN
                    </Button>
                    <small>Don't have an account?<Link to={'/register'}>Sign up</Link></small>
                </Form>
            </div>
        </div>
        </div>
    );
};

export default Login;