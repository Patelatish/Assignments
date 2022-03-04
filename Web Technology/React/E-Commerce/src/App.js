import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";import  Home from './component/Home';
import Signin from './component/Signin';
import Signup from './component/Signup';
// import Product from './component/Product';
import CartDetails from './component/Cart';
import Checkout from './component/Checkout';
import Dashboard from './component/Dashboard';
import { useState } from 'react';

function App() {
  const [cartItems,setCartItems] = useState([]);
    const cartHandle = (item)=>{
        //console.log(item);
        cartItems.push(item);
        console.log(cartItems);
    }
  return (
    <Router>
      <div className='app'>      
        <Header/>
        <div>
          <Switch>
            <Route path="/signin"><Signin/></Route>
            <Route path="/signup"><Signup/></Route>
            {/* <Route path="/product"><Product/></Route> */}
            <Route path="/cart"><CartDetails/></Route>
            <Route path="/checkout"><Checkout/></Route>     
            <Route path='/dashboard'><Dashboard/></Route>  
            <Route path="/"><Home /></Route>     
          </Switch>
        </div>      
      </div>
    </Router>
  );
}
export default App;
