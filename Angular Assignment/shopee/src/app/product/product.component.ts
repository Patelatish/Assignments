import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:any;
  product:any = {id:'',
                details:{}};
  user_id:any='';
  constructor(private activatedRoute : ActivatedRoute,
              private firestore : AngularFirestore, 
              private cart: CartService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.firestore.collection('Products').doc(this.id).ref.get().then(i=>{
      this.product.id = this.id;
      this.product.details = i.data();
    })
    console.log(this.product);
  }
  addToCart(item:any){
    this.cart.addToCart(item);
  }
}
