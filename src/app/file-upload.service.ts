//文件上传服务
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { StateService } from './state.service';

const endpoint = '/api/uploads'

@Injectable()
export class FileUploadService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
    private state: StateService
  ) { }

  /**
   * 上传文件, 返回该文件对应的段落ID
   * @param fileToUpload 需要上传的文件
   */
  upload_paragraph(fileToUpload: File, post_id): Observable<any> {
    const formData: FormData = new FormData()
    formData.append('file', fileToUpload, fileToUpload.name)
    return this.httpClient
      .post(
        endpoint,
        formData,
        {
          headers: { session: this.state.sessionId, post: post_id },
          responseType: 'text'
        }
      )
  }
}
