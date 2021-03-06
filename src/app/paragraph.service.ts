import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Paragraph, Util } from './resources';
import { StateService } from './state.service';

const endpoint = '/api/paragraphs'
const listEndpoint = '/api/paragraph-list'

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
    private state:StateService
  ) { }

  /**
   * 根据段落ID获取
   * @param para_id 段落ID
   */
  public get_by_id(para_id: string): Observable<Paragraph> {
    return this.httpClient.get<Paragraph>(
      `${endpoint}/${para_id}`
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
    console.info(`根据文章ID获取列表${post_id}`)
    return this.httpClient.get<Paragraph[]>(
      `${listEndpoint}?post=${post_id}`
    ).pipe(
      catchError(Util.handleError(
        () => { },
        null))
    )
  }

  /**
   * 根据ID删除
   * @param para_id 需要删除的段落ID
   */
  public delete_by_id(para_id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      `${endpoint}/${para_id}`,
      {headers: {session: this.state.sessionId}}
    )
  }
}
