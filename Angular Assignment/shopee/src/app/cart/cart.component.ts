import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any = [];
  public amount : number =0;
  public user:boolean=false;

  constructor( private cart:CartService, private auth: AuthenticationService) { }
  ngOnInit(): void {
    //this.products = this.cart.getCartData();
    this.cart.getCartData().subscribe(res => {
      this.products = res;
      this.amount = this.cart.getAmount();
      this.user = this.auth.user_id?true:false;
    })
  }

  removeItem(item:any){
    this.cart.removeItem(item)
  }

  clearCart(){
    this.cart.clearCart();
  }

  onQtyIncrease(id:any){
    this.cart.onQtyIncrease(id);
  }

  onQtyDecrease(id:any){
    this.cart.onQtyDecrease(id);
  }
}
