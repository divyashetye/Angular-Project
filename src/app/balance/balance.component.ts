import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{
acc:any;
constructor(private bser:BankService)
{}
ngOnInit(): void {
  this.bser.getBal().subscribe(data=>{
    console.log(data);
    this.acc=data;
  },(err)=>{
    console.log(err);
  })
}
}
