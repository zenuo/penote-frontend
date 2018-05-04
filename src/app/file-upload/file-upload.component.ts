import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileUploadService.post(files[0])
      .subscribe(
        data => {
          console.log(`上传文件${files[0].name}`);
        }, error => {
          console.error(error);
        });
  }
}
