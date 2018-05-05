import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Constant {
    // 会话ID
    public static session_id: string = null;
    // 用户
    public static user: User = null;
}

export class Util {
    public static handleError<T>(
        func: Function, 
        result?: T
    ) {
        return (error: any): Observable<T> => {
          func.apply(null)
          return of(result as T)
        };
      }
}

export interface Character {
    id: string
    index_number: number
    updated: Date
}

export interface Paragraph {
    id: string
    index_number: number
    post_id: string
    updated: Date
}

export interface Session {
    user_id:string
    session:string
}

export interface User {
    id: string,
    name: string,
    email: string,
    bio:string,
    updated: Date
}