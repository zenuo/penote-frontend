import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constant {
    // 会话ID
    public static session_id: string = null;
    // 用户
    public static user: User = null;
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