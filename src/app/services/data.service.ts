import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  withCredential:true,
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser=""
  trans=""
  acc_num=""

  
  user: any = {
    1000: { pname: "ram", account_number: 1000, balance: 2000, password: "userone",transaction:[] },
    1001: { pname: "ram pj", account_number: 1001, balance: 5000, password: "usertwo",transaction:[] }
  }
  constructor(private http:HttpClient) {
   //this.getDetails()
   }
//   saveDetails(){
//     if(this.user)
//     {
//       localStorage.setItem("user",JSON.stringify(this.user))
//     }
//     if(this.currentUser){
//       localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
//     }
  
//   if(this.acc_num){
//     localStorage.setItem("acc_num",JSON.stringify(this.acc_num))
//   }
//   if(this.trans){
//     localStorage.setItem("trans",JSON.stringify(this.trans) )
//   }
// }
//   getDetails(){
//     if(localStorage.getItem("user")){
//     this.user=JSON.parse(localStorage.getItem("user")||'')
//     }
//     if(localStorage.getItem("currentUser"))
//     {
//       this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
//     }
//   }


  getTransaction(account_number:any){
    // return this.user[acno].transaction
    const data={
      account_number
    }
   
   return this.http.post("http://localhost:3000/transaction", data,this.getOptions())
  }
  register(account_number: any, pname: any, balance: any, password: any) {
    const data={
      pname,
      account_number,
      balance,
      password
    }
   return this.http.post("http://localhost:3000/register", data)

    // let accDetails = this.user
    // if (account_number in accDetails) {
    //   return false
    // }
    // else {
    //   accDetails[account_number] = {
    //     pname,
    //     account_number,
    //     balance,
    //     password,
    //     transaction:[]
    //   }
    //   console.log(this.user);
    //   this.saveDetails()
    //   return true
    // }
  }
  login(account_number: any, password: any) {
      const data={
        account_number,
        password
      }
      return this.http.post('http://localhost:3000/login',data,options)
    // let accDetails = this.user
    // if (account_number in accDetails) {
    //   if (password == accDetails[account_number]["password"]) {
    //     this.currentUser=accDetails[account_number]["pname"]
    //     this.acc_num=account_number
    //     console.log(this.currentUser);
    //     console.log(this.user);
        
    //      this.saveDetails()
    //     return true

    //   }
    //   else {
    //     alert("invalid password")
    //     return false
    //   }
    // }
    // else {
    //   alert("invalid user")
    //   return false
    // }
  }


  getOptions(){
    const token=localStorage.getItem("token")
    let headers=new HttpHeaders()
      if (token)
    {
      headers=headers.append("x-access-token",token)
      options.headers=headers
    }
    return options
  }

  deposit(account_number: any, password: any, amount: any) {

    const data={
      account_number,
      password,
      amount
    }
    
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
    //  var amt = Number(amount)
    // let accDetails = this.user
    // if (acno in accDetails) {
    //   if (password == accDetails[acno]["password"]) {
    //     accDetails[acno]["balance"] += amt
    //     accDetails[acno]["transaction"].push({
    //       amount:amt,
    //       type:"CREDIT"
    //     })

    //     this.saveDetails()
    //     console.log(accDetails);
        
    //     return accDetails[acno]["balance"]
    //   }
    //   else {
    //     alert("invalid password")
    //     return false
    //   }
    // }

    // else {
    //   alert("invalid user")
    //   return false
    // }
  }

  withdraw(account_number: any, password: any, amount: any) {
    const data={
      account_number,
      password,
      amount
    }
    
    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
    // var amt = parseInt(amount)
    // let accDetails = this.user
    // if (acno in accDetails) {
    //   if (password == accDetails[acno]["password"]) {
    //     if (accDetails[acno]["balance"] > amt) {
    //       accDetails[acno]["balance"] -= amt
    //       accDetails[acno]["transaction"].push({
    //         amount:amt,
    //         type:"DEBIT"
    //       })
  
    //       //this.saveDetails()
    //       console.log(accDetails);
          
    //       return accDetails[acno]["balance"]
    //     }
    //     else {
    //       alert("Insufficient balance")
    //       return false
    //     }
    //   }

    //   else {
    //     alert("invalid user")
    //     return false
    //   }
    // }
  }

  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  }

}
