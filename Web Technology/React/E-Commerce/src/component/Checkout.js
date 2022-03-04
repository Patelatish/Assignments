import { Container } from 'react-bootstrap';
import { orders } from './Cart';

function Checkout(props) {
    console.log(orders);
    return( 
    <Container>
        <h1 className='heading'>{props.orders}</h1>
    </Container>
    );
}
export default Checkout;
