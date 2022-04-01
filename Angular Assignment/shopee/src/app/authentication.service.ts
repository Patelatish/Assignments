import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  user:any;
  user_id:any;
  constructor(private angularFireAuth: AngularFireAuth, private router:Router) {

  }

  SignUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Sign up Successfully Done....!!')
      this.router.navigate(['/signin']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/signup']);
    })
  }

  SignIn(email: string, password: string){
    this.angularFireAuth.signInWithEmailAndPassword(email,password).then((result)=>{
      localStorage.setItem('UserToken','true');
      console.log(result.user?.uid)
      this.user_id=result.user?.uid;
      localStorage.setItem('User_id',this.user_id);
      this.router.navigate(['/']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/signin']);
    })
  }

  SignOut(){
    this.angularFireAuth.signOut().then(()=>{
      localStorage.removeItem('UserToken');
      localStorage.removeItem('User_id');
      this.user_id='';
      this.router.navigate(['/signin']);
    }, err => {
      alert(err.message);
    })
  }
}
