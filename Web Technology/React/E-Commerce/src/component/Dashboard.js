import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { auth } from "../firebaseConfig";

function Dashboard() {
    const [user,setUser] = useState({});
    const signout = async (e) => {
        await signOut(auth);
    };
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
    });
    if (!user) {
        return <Redirect to="/signin" />;
      }
    return(
        <Container>
            <h1 className="heading">User Dashboard</h1>
            <p>{user?.email}</p>
            <Button variant='primary' onClick={signout}>Signout</Button>
        </Container>
    );
}
export default Dashboard;
