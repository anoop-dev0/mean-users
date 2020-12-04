import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private router :Router, private users : UserServicesService) { }

  ngOnInit(): void {
  }
  getImage(imgSrc){
    return `${environment.apiUrl}/images/${imgSrc}`;
  }
  edit(user){
    this.router.navigate(['/edit/', user._id]);
  }
  delete(user){
    this.users.deleteUser(user._id).subscribe(response=>{
      if(response["success"])
      {
        this.router.navigate(['/users']);
      }else{
        alert("User could not be deleted");
      }
    })
  }
}
