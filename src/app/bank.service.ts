import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
  createacc(body:any){
    return this.http.post("http://localhost:3000/account",body);
  }

  // getdetails(){
  //   return this.http.get("http://localhost:3000/account");
  // }
  
  createpass(body:any){
    return this.http.post("http://localhost:3000/account",body);
  }

  // delAcc(id:number){
  //   return this.http.delete("http://localhost:3000/account/"+id);
  // }

  getBal(){
    return this.http.get("http://localhost:3000/account");
  }

  getById(id:number){
    return this.http.get("http://localhost:3000/account/"+id);
  }

  update(id:number,body:any){
    return this.http.put("http://localhost:3000/account/"+id,body);
  }

  getTransaction(){
    return this.http.get("http://localhost:3000/account");
  }

  logindetails(){
    return this.http.get("http://localhost:3000/account");
  }

  deposit(body:any){
    return this.http.post("http://localhost:3000/account",body);
  }

  withdraw(body:any){
    return this.http.post("http://localhost:3000/account",body);
  }
}
