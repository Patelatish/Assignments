import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data : any;
  dataByCategory : any;

  constructor(private firestore:AngularFirestore, private cart:CartService) { }

  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.firestore.collection('Products').snapshotChanges().subscribe(record => {
      this.data = record.map(e => {
        return{
          id : e.payload.doc.id,
          details : e.payload.doc.data() 
        }
      })
      this.dataByCategory = this.data;
    });
  }

  filter(event:any){
    //console.log(event.target.value);
    this.dataByCategory = this.data.filter((e:any)=>{
      if(e.details.category == event.target.value || event.target.value == ''){
        return this.dataByCategory;
      }
    })
    //this.dataByCategory = this.data;
  }
  
  addToCart(item:any){
    this.cart.addToCart(item);
  }
}
