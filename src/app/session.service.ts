import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Session, Constant, Util } from './resources';

const endpoint = '/api/sessions'

@Injectable()
export class SessionService {
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * 登入
   * @param user_name 用户名 
   * @param password 密码
   */
  signin(user_name: string, password: string): Observable<Session> {
    console.info(`登入-用户名${user_name}-密码${password}`)
    const body = { "user_name": user_name, "password": password }
    return this.httpClient
      .post<Session>(endpoint, body)
      .pipe(catchError(Util.handleError(
        () => { this.messageService.openSnackBar('登出', "登出失败") },
        null
      )))
  }

  /**
   * 登出
   */
  signout(): Observable<boolean> {
    console.info('登出')
    if (Constant.session_id == null) {
      //若未登录,返回失败
      return of(false)
    } else {
      return this.httpClient
        .delete<boolean>(`${endpoint}/${Constant.session_id}`)
        .pipe(catchError(Util.handleError(
          () => { this.messageService.openSnackBar('登出', "登出失败") },
          false
        )))
    }
  }
}
