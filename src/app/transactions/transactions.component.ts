import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  id:any;
  acc:any;
constructor(private bser:BankService)
{}
ngOnInit(): void {
  this.bser.getTransaction().subscribe(data=>{
    console.log(data);
    this.acc=data;
  })
}

}
