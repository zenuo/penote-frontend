import { Injectable } from '@angular/core';
import { User } from './resources';

@Injectable({
    providedIn: 'root'
})
export class Constant {
    // 会话ID
    public static session_id: string = null;
    // 用户
    public static user: User = null;
}