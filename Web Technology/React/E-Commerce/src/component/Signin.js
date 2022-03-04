import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './Signin.css';

function Signin() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const login = async (e) => {
        try{
            e.preventDefault();
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            console.log(user);
            alert("signin successfully");
            setCurrentUser(user);
        }catch(error){
            console.log(error.message);
        }
    };
    if(currentUser){
        return <Redirect to='/' />;        
    }
    return( 
    <Container className="signin-container">
        <Form className='signin-form' onSubmit={login} ><h1><i>Signin</i></h1>
                {/* Username : <input type="text" name="username" /><br />
                Password : <input type="password" name="password" /><br />
                <input type="button" name="submit" value="submit" /> */}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }} />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }} />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                <p>Don't Have an Account ? <Button variant='primary' as={Link} to={"/signup"}>Signup</Button></p>
            </Form>
    </Container>
    );
}
export default Signin;
