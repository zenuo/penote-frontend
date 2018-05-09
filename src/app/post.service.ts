import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { Post, Constant, Util } from './resources';

const endpoint = '/api/posts'
const listEndpoint = '/api/post-list'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * 根据文章ID获取
   * @param post_id 文章ID
   */
  public get_by_id(post_id: string): Observable<Post> {
    return this.httpClient.get<Post>(
      `${endpoint}/${post_id}`
    )
  }

  /**
   * 根据用户ID获取列表
   * @param user_id 用户ID
   */
  public get_list_by_user_id(user_id): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${listEndpoint}?user=${user_id}`
    )
  }

  /**
   * 创建文章
   * @param user_id 用户ID
   * @param title 标题
   */
  public create(user_id: string, title: string): Observable<Post> {
    const body = {
      'user_id': user_id,
      'title': title,
    }
    return this.httpClient.post<Post>(
      endpoint,
      body,
      { headers: { session: Constant.session_id } }
    )
  }

  /**
   * 获取所有
   */
  public get_all(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      listEndpoint
    )
  }
}
