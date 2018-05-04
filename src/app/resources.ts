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