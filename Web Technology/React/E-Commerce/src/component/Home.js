import { Container } from 'react-bootstrap';
import './Home.css';
import Product from './Product';
// import Signin from './Signin';
function Home() {
    return(
        <Container>
            <h1 className='heading'>Shop</h1>
            <Product>
            </Product>
        </Container>
    );}
export default Home;
