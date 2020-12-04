import { importExpr, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { RegisterModel } from "../../models/register.model";
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:RegisterModel = new RegisterModel();
  registrationForm:FormGroup;
  constructor(private formBuilder : FormBuilder, private router : Router,private users : UserServicesService) { }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [
        Validators.required
      ]],
      'lastName': [this.user.lastName, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'phoneNumber': [this.user.phoneNumber, [
        Validators.required,
        Validators.pattern("^[6-9]{1}[0-9]{9}"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]]
    })
  }
  uploadImage(imageFile){
    this.user.image = imageFile;
    
  }
  submit(){
    debugger;
    const formData = new FormData();
    //formData.append('image',this.user.image);
    Object.keys(this.user).forEach(key=>{
      formData.append(key,this.user[key]);
    })
    this.users.postUser(formData).subscribe(response=>{
      if(response["success"])
      { 
        alert("Inserted");
        this.router.navigate(['/users'])
      }
      else{
        alert("Failed");
        console.log(response["err"])
      }
    })
  }

}
