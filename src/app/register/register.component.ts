import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 firstname:string="";
 lastname:string="";
 email:string="";
 phoneno:string="";
 dob:string="";
 address:string="";
 city:string="";
 state:string="";
 username:string="";
 password:string="";

 constructor(private bser:BankService,private route:Router)
 {}
 ngOnInit(): void {
  }
 onSubmit(){
  this.route.navigate(['/home']);
 }
 
  createaccount(eform:NgForm)
  {
   const postbody={
     firstname:eform.value.firstname,
     lastname:eform.value.lastname,
     email:eform.value.email,
     phoneno:eform.value.phoneno,
     dob:eform.value.dob,
     address:eform.value.address,
     city:eform.value.city,
     state:eform.value.state,
     username:eform.value.username,
     password:eform.value.password
   }
   this.bser.createacc(postbody).subscribe(data=>{
     alert("Account Created Successfully!");
     console.log(data);
     localStorage.setItem('user',JSON.stringify(data));
   },(err)=>{
     alert("Account cannot be created");
   })
  }
}
