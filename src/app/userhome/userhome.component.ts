import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  acno=""
  pwd=""
  amt=""

  wacno=""
  wpwd=""
  wamt=""
 //user=this.ds.currentUser

 user:any
 accno:any
 dLogin:Date=new Date()
 // router: any
  constructor( private ds:DataService, private fb:FormBuilder, private router:Router) { 
    this.user=localStorage.getItem("currentUser")
  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("plzs login....!!")
      this.router.navigateByUrl("")
    }
  }
  deposit(){
    var acno=this.acno
    var pwd=this.pwd
    var amt=this.amt
   this.ds.deposit(acno,pwd,amt)
   .subscribe((result:any)=>{
     if(result){
        alert(result.message)
     }
   },
   (result)=>{
     alert(result.error.message)
   }
   )

    // if(result){
    //   alert(amt + "Successfully deposited...!! and new balance is : " + result)
    // }
    
  }
  
  
 withdraw()
  {
    var acno=this.wacno
    var pwd=this.wpwd
    var amt=this.wamt
   // var result=this.ds.withdraw(acno,pwd,amt)
    this.ds.withdraw(acno,pwd,amt)
    .subscribe((result:any)=>{
      if(result){
         alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    // if(result){
    //   alert(amt + "Debited successfully..!! and new balance is : " + result)
    // }
  } 

  deleteParent(){
    this.accno=JSON.parse(localStorage.getItem("currentAcc") || '')
  }
  onCancel(){
    this.accno=""
  }
  onDelete(event:any){
//alert("from parent event"+event)
this.ds.deleteAcc(event)
.subscribe((result:any)=>{
  if(result){

     alert(result.message)
     localStorage.removeItem("token")
     this.router.navigateByUrl("")
  }
},
(result)=>{
  alert(result.error.message)
}
)
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
}
