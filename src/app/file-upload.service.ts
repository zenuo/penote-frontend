//文件上传服务
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class FileUploadService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  post(fileToUpload: File): Observable<string> {
    const endpoint = '/api/uploads';
    const formData: FormData = new FormData()
    formData.append('file', fileToUpload, fileToUpload.name)
    return this.httpClient
      .post<string>(
        endpoint,
        formData)
      .pipe(
        tap(response => this.messageService.openSnackBar('上传文件', `${fileToUpload.name}完成,键${response['key']}`)),
        catchError(this.handleError<string>(`文件上传异常 ${fileToUpload.name}`)))
  }

  //错误处理
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.openSnackBar('上传文件', operation)
      return of(result as T)
    };
  }
}
