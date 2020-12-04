import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Output() imageEvent = new EventEmitter();

  imageName:string;
  fileChangeEvent(event){
    const file = event.target.files[0];
    this.imageName = file.name;
    this.imageEvent.emit(file);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
