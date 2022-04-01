import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeUser = localStorage.getItem('UserToken')?true:false;
  
  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
    
  }

  signout(){
    this.auth.SignOut();
    this.activeUser = false;
  }
}
