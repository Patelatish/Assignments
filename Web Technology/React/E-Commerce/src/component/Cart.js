import { Container, Button, Row, Col, Table, Form, Modal } from "react-bootstrap";
import { Trash } from 'react-bootstrap-icons';
import './Cart.css';
import { Link } from 'react-router-dom';
import { cartItems } from './Product';
import { useEffect, useState } from "react";
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
//import Checkout from "./Checkout";
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export let orders = []
function CartDetails() {
    //console.log(cartProducts);
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        setCartProducts(cartItems);
    }, []);
    // console.log(cartProducts);
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });

    const [total, setTotal] = useState(0);
    useEffect(() => {
        let amt = 0;
        cartProducts.forEach((i) => {
            amt = parseInt(amt) + parseInt(i.price);
        })
        setTotal(amt)
    })
    // const [price,setPrice] = useState(0);
    // useEffect(()=>{
    //     let amt=0;
    //     cartProducts.forEach((i)=>{
    //         amt = parseInt(amt)+parseInt(i.);
    //     })
    //     setTotal(amt)
    // })
    const cartRemove = (id) => {
        console.log(id);
        setCartProducts(cartProducts.filter((obj) => obj.id !== id));
        console.log(cartProducts);
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [pincode, setPincode] = useState('');

    const checkOut = () => {
        //const ref = db.ref("Orders");
        const curEmail = user.email;
        const userId = user.uid;
        const orderFinal = {
            name,
            address,
            mobile,
            pincode,
            cartProducts,
            curEmail,
            userId,
            total,
        };
        console.log(orderFinal)
        addDoc(collection(db, "Orders"), orderFinal);
        //ref.push(orderFinal)
        setCartProducts([])
        setShow(false);
        alert("Order Placed Successfully")


        // orders = cartProducts;       
        // console.log("hello")
    }

    // const [qty,setQty] = useState(0);
    //    const updateQty=(qty,price)=>{
    //        console.log(qty,price);
    //        let i = qty*price;
    //        let amt = 0;
    //        amt = amt + i;
    //        setTotal(amt);
    //        console.log(total);
    //     }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container><h1 className="heading">Shopping Cart</h1>
            <Row>
                <Col sm={8} className="cart-container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map((item) => <tr>
                                <td><img src={item.productImage} width={75} height={100} /></td>
                                <td>{item.name}</td>
                                <td>1</td>
                                {/* <input type="number" min="1" defaultValue={1} onChange={(e)=>{updateQty(e.target.value,item.price)}}/> */}
                                <td>{item.price}</td>
                                <td><Button onClick={() => { cartRemove(item.id) }}><Trash /></Button></td>
                            </tr>
                            )}
                        </tbody>
                    </Table><hr />


                </Col>
                <Col sm={4} className="bill-container"><h2>Sub-Total : {total}</h2>
                    {user ?
                        (
                            // <Button variant='primary' onClick={()=>{checkOut()}} >Place Order</Button>
                            <Button variant="primary" onClick={handleShow}>Checkout</Button>
                        ) :
                        (<Button variant='primary' as={Link} to={"/signin"}>Place Order</Button>)
                    }
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" onChange={(event) => {
                            setAddress(event.target.value);
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phnumber">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(event) => {
                            setMobile(event.target.value);
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Pincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" placeholder="Enter Pincode" onChange={(event) => {
                            setPincode(event.target.value);
                        }} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => { checkOut() }} >Place Order</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
export default CartDetails;
