import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  signin(){
    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    if(this.password == ''){
      alert('Please enter password');
      return;
    }
    this.auth.SignIn(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
