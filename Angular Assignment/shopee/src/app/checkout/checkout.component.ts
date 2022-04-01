import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public products:any = [];
  public amount : number =0;

  public user_id = localStorage.getItem('User_id');

  public firstName : string = '';
  public lastName : string = '';
  public phoneNo : string = '';
  public state : string = '';
  public city : string = '';
  public pincode : string = '';

  public Order:object = {};

  constructor(private cart:CartService, 
              private auth:AuthenticationService, 
              private firestore:AngularFirestore,
              private router:Router) { }

  ngOnInit(): void {
    this.cart.getCartData().subscribe(res => {
      this.products = res;
      this.amount = this.cart.getAmount()
    });
  }

  placeOrder(){
    this.Order = {
      "first name":this.firstName,
      "last name":this.lastName,
      "phone number":this.phoneNo,
      "state":this.state,
      "city":this.city,
      "pincode":this.pincode,
      "user_id":this.user_id,
      "products":this.products,
      "total":this.amount
    }
    this.firestore.collection('Orders').add(this.Order)
    .catch((e)=>{
      console.log(e);
    })
    .then(()=>{
      this.cart.clearCart();
      alert('Your Order has been placed....!!')
      this.router.navigate(['/']);
    })
    console.log(this.Order)
  }
}
