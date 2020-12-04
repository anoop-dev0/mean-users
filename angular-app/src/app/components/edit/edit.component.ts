import { importExpr, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { EditModel } from "../../models/edit-model";
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user:EditModel = new EditModel();
  updationForm:FormGroup;
  constructor(private formBuilder : FormBuilder, private router : Router,private route:ActivatedRoute,private users : UserServicesService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.users.getUser(id).subscribe(userdetail=>{
      this.user.id= userdetail["user"]["_id"];
      this.user.firstName= userdetail["user"]["firstName"];
      this.user.lastName= userdetail["user"]["lastName"];
      this.user.email= userdetail["user"]["email"];
      this.user.phoneNumber= userdetail["user"]["phoneNumber"];
      this.user.image = userdetail["user"]["image"];

    })
    this.updationForm = this.formBuilder.group({
      'id':[this.user.id],
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
    this.users.putUser(this.user,this.user.id).subscribe(response=>{
      if(response["success"])
      { 
        alert("Updated");
        this.router.navigate(['/users'])
      }
      else{
        alert("Could not be updated");
      }
    })
  }
}
