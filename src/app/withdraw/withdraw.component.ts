import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  id:string='';
  withdraw:string='';

constructor(private bser:BankService)
{}
withdrawform(dform:NgForm){
  alert(`Rs.${this.withdraw} withdrawed successfully from account no. ${this.id}`);
}
}
