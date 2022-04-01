import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  user_id = localStorage.getItem('User_id');
  productList: any[] = new Array();

  constructor(private firestore:AngularFirestore, private auth:AuthenticationService) { }
  
  ngOnInit(): void {
    this.firestore.collection('Orders', (ref: any) => ref.where("user_id", "==", this.user_id)).get().subscribe((ss: any) => {
      ss.docs.forEach((doc: any) => {
        this.productList.push(doc.data()['products']);  
      })      
    })
  console.log(this.productList);    
  }
}
