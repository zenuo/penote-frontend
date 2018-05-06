import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { Character, Constant } from './resources';

const endpoint = '/api/characters'
const listEndpoint = '/api/character-list'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * 根据文字ID获取文字信息
   * @param character_id 文字ID
   */
  public get_by_id(character_id: string): Observable<Character> {
    console.info(`根据文字ID获取文字信息-${character_id}`)
    return this.httpClient.get<Character>(
      `${endpoint}/${character_id}`,
      { headers: { 'session': Constant.session_id } }
    )
  }

  /**
   * 根据段落ID获取文字列表
   * @param para_id 段落ID
   */
  public get_list_by_para_id(para_id): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(
        `${listEndpoint}?para=${para_id}`,
        { headers: { 'session': Constant.session_id } }
      )
  }
}
