import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
id:any;
acc:any;
constructor(private route:ActivatedRoute,private bser:BankService)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.paramMap.get('id');
  this.bser.getById(this.id).subscribe(data=>{
    this.acc=data;
    console.log(data);
  })
}

updateForm(eform:any){
  const postbody={
    firstname:eform.value.firstname,
    lastname:eform.value.lastname,
    email:eform.value.email,
    phoneno:eform.value.phoneno,
    dob:eform.value.dob,
    address:eform.value.address,
    city:eform.value.city,
    state:eform.value.state,
    username:eform.value.username
  }
  this.bser.update(this.id,postbody).subscribe(data=>{
    alert("Data Updated Successfully");
  },(err)=>{
    alert("Something went wrong");
  })
}
}
