import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname=""
acno=""
pwd=""
bal=""

registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  bal:['']

})

  constructor(private router : Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    //console.log(this.registerForm.get('uname')?.errors);
    
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pwd=this.registerForm.value.pwd
    var bal=this.registerForm.value.bal
    if(this.registerForm.valid)
    {
    this.ds.register(acno, uname,bal,pwd)
    .subscribe((result:any)=>{
      if (result){
        alert(result.message)
        
        //alert("successfully registered")
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    
      // else{
      //   alert("user already exist..!!!")
      // }
    })
    
  }
  else{
    alert("invalid form")
  }
}
}