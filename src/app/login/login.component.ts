import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=""
  acno=""
  pwd=""
  bal=""

  loginForm=this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    bal:['']
  
  })
  
  constructor(private router : Router, private ds:DataService, private fb:FormBuilder) { }



  ngOnInit(): void {
  }

 
  //Event binding using $event as argument
//   accChange(event:any){
// this.acno=event.target.value

//   }
// pwdChange(event:any){
//     this.pwd=event.target.value
    
//       }




  login(){
   
    var acno=this.loginForm.value.acno
    var pwd=this.loginForm.value.pwd
    if(this.loginForm.valid){
    this.ds.login(acno,pwd)
    .subscribe((result:any)=>{
        if(result)
        {
          localStorage.setItem("token",result.token)
         localStorage.setItem("currentUser",result.currentUser)
          localStorage.setItem("currentAcc",acno)
          alert(result.message)
          this.router.navigateByUrl("userhome")
        }
        },
        (result)=>{
          alert(result.error.message)
        }
    )
    
    
    // if(result)
    // {
    //   alert("login successful...!!")
    
      
    //   this.router.navigateByUrl("userhome")
    // }
    
   
  }
  else{
      alert("Invalid form")
  }

  }
// Event binding using template referencing variable
  // login(a:any,p:any)
  // {
  //   var acno=a.value
  //   var pwd=p.value
  //   let accDetails=this.user
  //   if(acno in accDetails)
  //   {
  //     if(pwd == accDetails[acno]["password"]){
  //       alert("login successful...")
  //     }
  //     else{
  //       alert("invalid password")
  //     }
  //   }
  //   else{
  //     alert("invalid user")
  //   }
  // }

}