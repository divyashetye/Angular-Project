import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AftLoginComponent } from './aft-login/aft-login.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UpdateComponent } from './update/update.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"details",component:ViewDetailsComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"aftlogin",component:AftLoginComponent, canActivate:[authGuard]},
  //{path:"balance",component:BalanceComponent, canActivate:[authGuard]},
  // {path:"transactions",component:TransactionsComponent, canActivate:[authGuard]},
  {path:"update/:id",component:UpdateComponent, canActivate:[authGuard]},
  {path:"deposit",component:DepositComponent, canActivate:[authGuard]},
  {path:"withdraw",component:WithdrawComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
