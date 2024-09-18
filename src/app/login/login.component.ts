import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login:FormGroup|any;
  constructor(private bser:BankService,private route:Router)
  {}
  ngOnInit(): void {
    this.login=new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    })
  }
  logindata(login:FormGroup){
    this.bser.logindetails().subscribe((res:any)=>{
      const user=res.find((a:any)=>{
        return a.username === this.login.value.username && a.password === this.login.value.password
      });

      if(user){
      localStorage.setItem('user',JSON.stringify(user));
       this.route.navigate(["/aftlogin"]);
      }
      else{
          alert("User Not Found");
          this.route.navigate(["/login"]);
        }
    },err=>{
      console.log(err);
    })
  }
}
