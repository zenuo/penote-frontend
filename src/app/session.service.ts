import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Session } from './resources';

@Injectable()
export class SessionService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  signin(user_name: string, password: string): Observable<Session> {
    const endpoint: string = '/api/sessions';
    const body = { "user_name": user_name, "password": password }

    return this.httpClient
      .post<Session>(endpoint, body)
      .pipe(catchError(this.handleError<Session>(`服务器异常`)));
  }

  //错误处理
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.openSnackBar('会话', operation)
      return of(result as T)
    };
  }
}
