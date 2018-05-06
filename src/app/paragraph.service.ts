import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Paragraph, Constant, Util } from './resources';

const endpoint = '/api/paragraphs'
const listEndpoint = '/api/paragraph-list'

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * 根据段落ID获取
   * @param para_id 段落ID
   */
  public get_by_id(para_id: string): Observable<Paragraph> {
    return this.httpClient.get<Paragraph>(
      `${endpoint}/${para_id}`,
      { headers: { 'session': Constant.session_id } }
    ).pipe(
      catchError(Util.handleError(
        () => { },
        null))
    )
  }

  /**
   * 根据文章ID获取列表
   * @param post_id 文章ID
   */
  public get_list_by_post_id(post_id: string): Observable<Paragraph[]> {
    return this.httpClient.get<Paragraph[]>(
      `${endpoint}?post=${post_id}`,
      { headers: { 'session': Constant.session_id } }
    )
  }
}
