import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{
  acc:any;
  constructor(private bser:BankService,private router:Router)
  {}
  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user){
      this.acc = JSON.parse(user)
    }  
  //   this.bser.getdetails().subscribe((data)=>{   
  //     console.log(data);
  //     this.accounts=data;
  //   },
  //   (err)=>{
  //     console.log("Data not found");
  //   })
    }

  updateacc(id:number){
   this.router.navigateByUrl("/update/"+id);
  }

  // deleteacc(id:number){
  //   this.bser.delAcc(id).subscribe(data=>{
  //     alert("Record Deleted");
  //   },(err)=>{
  //     alert("Record cannot be deleted");
  // })
  // }
}
