import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Session, Constant } from './resources';

@Injectable()
export class SessionService {

  endpoint = '/api/sessions'

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  //登入
  signin(user_name: string, password: string): Observable<Session> {
    const body = { "user_name": user_name, "password": password }

    return this.httpClient
      .post<Session>(this.endpoint, body)
      .pipe(catchError(this.handleError<Session>(`服务器异常`, null)));
  }

  //登出
  signout(): Observable<boolean> {
    if (Constant.session_id == null) {
      //若未登录,返回失败
      return of(false)
    } else {
      return this.httpClient
        .delete<boolean>(`${this.endpoint}/${Constant.session_id}`)
        .pipe(catchError(this.handleError<boolean>(`服务器异常`, false)));
    }
  }

  //错误处理
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.openSnackBar('会话', operation)
      return of(result as T)
    };
  }
}
