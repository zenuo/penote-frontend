import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { PostService } from '../post.service';
import { Constant, Post, Paragraph } from '../resources';
import { FileUploadService } from '../file-upload.service';
import { ParagraphService } from '../paragraph.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  //文章表单组
  postFormGroup: FormGroup = null

  //段落表单组
  paragraphFormGroup: FormGroup = null

  //文章ID
  post: Post = null

  //段落列表
  paragraphs: Paragraph[] = []

  //文件列表
  files: File[] = []

  constructor(
    private _formBuilder: FormBuilder,
    private messageService: MessageService,
    private postService: PostService,
    private fileUploadService: FileUploadService,
    private paragraphService: ParagraphService
  ) {
    this.postFormGroup = this._formBuilder.group({
      title: ['', Validators.required]
    });
    this.paragraphFormGroup = this._formBuilder.group({
    });
  }

  ngOnInit() {
  }

  /**
   * 创建文章按钮
   */
  createPost(): void {
    const title = this.postFormGroup.get('title').value
    this.postService.create(
      Constant.user.id,
      title
    ).subscribe(post => {
      if (post !== null && post.id !== null) {
        this.post = post
        this.messageService.openSnackBar('文章', `创建'${title}'成功`)
      }
    })
  }

  /**
   * 选择文件, 将选中的文件覆盖files
   * @param files 文件列表
   */
  uploadFile() {
    this.fileUploadService.upload_paragraph(this.files[0], this.post.id)
      .subscribe(
        para_id => {
          if (para_id !== '') {
            this.messageService.openSnackBar('段落', `创建${para_id}成功`)
            this.paragraphService.get_by_id(para_id).subscribe(
              para => {
                if (para !== null && para.id != null) {
                  this.paragraphs.concat(para)
                }
              }
            )
          }
        }
      );
  }
}
