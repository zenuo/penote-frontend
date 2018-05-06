import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { User, Constant, Util } from './resources';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = '/api/users'

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * 由用户ID获取用户信息
   * @param user_id 用户ID
   */
  public get_by_user_id(user_id: string): Observable<User> {
    return this.httpClient
      .get<User>(
        `${this.endpoint}/${user_id}`,
        { headers: { "session": Constant.session_id } }
      )
      .pipe(
        catchError(Util.handleError(
          () => { this.messageService.openSnackBar('用户', '获取信息失败') },
          null
        ))
      )
  }

  /**
   * 
   * @param name 用户名
   * @param email 电邮
   * @param bio 签名
   * @param password 密码 
   */
  public signup(
    name: string,
    email: string,
    bio: string,
    password: string
  ): Observable<User> {
    let body = { 'name': name, 'email': email, 'bio': bio, 'password': password }
    return this.httpClient
      .post<User>(this.endpoint, body)
      .pipe(catchError(Util.handleError(
        () => {this.messageService.openSnackBar('用户', '注册失败')},
        null
      )))
  }
}
