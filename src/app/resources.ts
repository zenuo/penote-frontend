import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Constant {
    // 会话ID
    public static session_id: string = '7ac7cb5b-1bbb-4659-b14a-305714b1c100';
    // 用户
    public static user: User = null;
}

export class Util {
    /**
     * 处理异常
     * @param callback 需要执行的函数
     * @param result 结果
     */
    public static handleError<T>(
        callback: (...args: any[]) => void,
        result?: T
    ) {
        return (error: any): Observable<T> => {
            callback.apply([])
            return of(result as T)
        };
    }
}

export interface Character {
    id: string
    index_number: number
    paragraph_id: string
    created: Date
    updated: Date
}

export interface Paragraph {
    id: string
    index_number: number
    post_id: string
    updated: Date
}

export interface Post {
    id: string
    user_id: string
    title: string
    created: Date
    updated: Date
}

export interface Session {
    user_id: string
    session: string
}

export interface User {
    id: string,
    name: string,
    email: string,
    bio: string,
    updated: Date
}