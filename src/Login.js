import React , {useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    const[mail , setMail] = useState()
    const[password , setPassword] = useState()

  return (
    <div className='bg'>
    <div className="container h-100 loginform">
    <div className="row h-100 justify-content-center align-items-center">
    <Form className='col-6'>
        <h1 className='logintag'> Login </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='emaillabel'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={mail} onChange={event => {
           setMail(event.target.value);
           console.log(mail);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='passwordlabel'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={event => {
            setPassword(password);
        }}/>
      </Form.Group><Link to={{pathname:'/blogs'}}>
      <Button variant="primary" type="submit">
       Log in
      </Button></Link>
      <div className='newusertag'><Link to={{pathname:'/register'}}> new User?</Link> </div>
    </Form>
   
    </div>
    </div>
    </div>
  );
}

export default Login;





