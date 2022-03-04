import { Row, Col, Card, Button} from 'react-bootstrap';
import './Product.css';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
export const cartItems = [];
function Product() {
    //const [cartItems,setCartItems] = useState([]);
    const cartHandle = (item)=>{
        //console.log(item);
        const temp=cartItems.find((obj)=>obj === item);
        if(!temp){
            cartItems.push(item);
            alert("Item Added to Cart");
        }
        else{
            alert("Already Exist")
           }
        //console.log(cartItems);
    }     
    const [item,setItem] = useState([]);
    useEffect(()=>{
        getAllData();
    },[])
    async function getAllData(){
        const product = [];
        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            const obj = {
                id:doc.id,
                ...doc.data()
            }
            product.push(obj);
            // if(doc.data().category === "cloth"){
            //     product.push(doc.data());
            // }
           // console.log(doc.id, " => ", doc.data());
        });
        setItem(product);
    }
    
    //console.log(item);
    // const ref = collection(db, "Products");
    // console.log(ref);
    
    
    const [filter,setFilter]=useState('');
    return(<>
    <Row>
        {/* <Nav>
            <Nav.Link><Button>All</Button></Nav.Link>
            <Nav.Link><Button>Cloths</Button></Nav.Link>
            <Nav.Link><Button>Electronics</Button></Nav.Link>
        </Nav> */}
        <Col align="right">
        <select onChange={(e)=>{setFilter(e.target.value)}} value={filter}>
            <option value="">All</option>
            <option value="cloths">Cloths</option>
            <option value="electronics">Electronics</option>
        </select>
        </Col>
        </Row>
           <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: item.length }).map((p) => (
                    <Col align="center">
                    <Card className='mycol'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            price : 100$
                        </Card.Text>
                        </Card.Body>
                        <Button className='custom-btn'>
                            Add to Cart
                        </Button>
                    </Card>
                    {/* <Button className='custom-btn'>
                            Add to Cart
                        </Button> }
                    </Col> }
                ))}*/}
                {item.filter(obj=>obj.category.includes(filter)).map((i)=>(
                    <Col align="center">
                        <Card className='mycol'>
                        <Card.Img className='myimg' fluid="false" variant="top" src={i.productImage} alt="Loading..."/>
                        <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>
                            price : {i.price}
                        </Card.Text>
                        </Card.Body>
                        <Button className='custom-btn' onClick={()=>{cartHandle(i)}}>
                            Add to Cart
                        </Button>
                    </Card>
                    </Col>
                ))}
            </Row>
            </>
    );

}
export default Product;

