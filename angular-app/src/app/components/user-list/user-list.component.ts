import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from "../../models/register.model";
import { UserServicesService } from "../../services/user-services.service";
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = [];
  constructor(private users : UserServicesService, private router : Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserList();
  }
  openDialog(user){
    const dialogRef = this.dialog.open(UserDetailsComponent,{data:user});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getImage(imgSrc){
    return `${environment.apiUrl}/images/${imgSrc}`;
  }
  getUserList(){
    this.users.getUserList().subscribe(response=>{
      this.userList = response["list"];
    })
  }
  edit(user){
    this.router.navigate(['/edit/', user._id]);
  }
  delete(user){
    this.users.deleteUser(user._id).subscribe(response=>{
      if(response["success"])
      {
        this.getUserList()
      }
    })
  }

}
