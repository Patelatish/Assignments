import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email : string = '';
  password : string = '';
  constructor( private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  signup(){
    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    if(this.password == ''){
      alert('Please enter password');
      return;
    }
    this.auth.SignUp(this.email,this.password);
    this.email = '';
    this.password = '';
  }

}
