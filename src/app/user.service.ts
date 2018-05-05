import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { User, Constant } from './resources';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  get(user_id: string): Observable<User> {
    return this.httpClient.get<User>(
      `/api/users/${user_id}`,
      { headers: { "session": Constant.session_id } }
    )
  }
}
