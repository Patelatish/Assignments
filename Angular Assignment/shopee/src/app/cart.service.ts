import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems : Array<object> = [];
  public productList = new BehaviorSubject<any>([]);
  
  constructor() { }

  setCartData(product:any){
    this.cartItems.push(...product);
    this.productList.next(product);
  }
  
  getCartData(){
    return this.productList.asObservable();
  }

  addToCart(item:any){
    let temp = false;
    this.cartItems.find((i)=>{
      if(i===item){
        temp = true;
      }
    })
    if(!temp){
      item.qty=1;
      item.total = item.qty*item.details.price;
      this.cartItems.push(item);
      this.productList.next(this.cartItems);
      this.getAmount();
      alert('Item Has Been Added To Cart..!!')
    }
    else{
      alert('Item Already Exist In Cart..!!')
    }    
  }

  getAmount() : number{
    let temp = 0;
    this.cartItems.map((a:any) => {
      temp += a.total;
    })
    return temp;
  }

  removeItem(item:any){
    this.cartItems.map((a:any , position:any) => {
      if(item.id === a.id){
        this.cartItems.splice(position,1);
      }
    })
    this.productList.next(this.cartItems);
  }

  clearCart(){
    this.cartItems = [];
    this.productList.next(this.cartItems);  
  }

  onQtyIncrease(id:any){
    //console.log(id+"+");
    this.cartItems.map((a:any) => {
      if(id === a.id){
        a.qty += 1;
        a.total = a.total+a.details.price;
        //console.log(a)
      }
    })
    this.productList.next(this.cartItems);  
  }

  onQtyDecrease(id:any){
    //console.log(id+'-');
    this.cartItems.map((a:any) => {
      if(id === a.id){
        a.qty -= 1;
        a.total = a.total-a.details.price;
        //console.log(a)
      }
    })
    this.productList.next(this.cartItems);  
  }
}
