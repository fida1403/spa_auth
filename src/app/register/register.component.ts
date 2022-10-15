import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule,Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!:FormGroup
  constructor(private formbuild:FormBuilder, private http:HttpClient, private router:Router) {
   }
   
   signup(){
    this.http.post<any>('http://localhost:3000/users',this.signupForm.value).subscribe(res=>{
      alert("user added")
      this.signupForm.reset;
      this.router.navigate(['sign-in']) 
    })
  }

  ngOnInit(): void {
    this.signupForm=this.formbuild.group({
      first_name:[''],
      last_name:[''],
      birthday:[''],
      gender:[''],
      email:[''],
      phone_number:['']

    })
  }
  
}
