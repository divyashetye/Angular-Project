import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  id:string='';
  deposit:string='';

  constructor(private bser:BankService)
  {}
depositform(dform:NgForm){
  alert(`Rs.${this.deposit} deposited successfully to Account No.${this.id}`);
}
}
