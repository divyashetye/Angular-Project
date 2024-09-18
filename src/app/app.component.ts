import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineBankingSystem';
  constructor(private router:Router){}

  loggedIn(){
    return localStorage.getItem('user');
  }

  loggedOut(){
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }
}
