import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Character, Constant, Util } from './resources';

const endpoint = '/api/characters'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * 根据字符ID获取字符信息
   * @param character_id 字符ID
   */
  public get_by_id(character_id: string): Observable<Character> {
    console.info(`根据字符ID获取字符信息-${character_id}`)
    return this.httpClient.get<Character>(
      `${endpoint}/${character_id}`,
      { headers: { 'session': Constant.session_id } }
    ).pipe(catchError(
      Util.handleError(
        () => { this.messageService.openSnackBar('字符', `获取${character_id}异常`) },
        null)))
  }
}
