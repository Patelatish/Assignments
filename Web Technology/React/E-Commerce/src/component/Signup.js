import { Form, Button, Container } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import './Signup.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    
    const register = async (e) => {
        try{
            e.preventDefault();
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
            setCurrentUser(true);
            alert("signup successfully");
            console.log(user);
        }catch(error){
            console.log(error.message);
            alert(error.message);
        }
    };
    if(currentUser){
        return <Redirect to='/dashboard' />;        
    }
    return(
        <Container className='signup-container'>
            <Form className="signup-form" onSubmit={ register } ><h1><i>Signup</i></h1>
                {/* <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First name" />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" />
                </Form.Group>                 
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>   */}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                <p>Already Have an Account ? <Button variant='primary' as={Link} to={"/signin"}>Signin</Button></p>
            </Form>
        </Container>
    );
}
export default Signup;
