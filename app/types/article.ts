export type block = {
    "id": string,
    "blockUuid": string,
    "articleUuid": string,
    "blockType": string,
    "content": string,
    "parentBlockUUid": string|null,
    "style": string|null,
    "url": string|null,
    "language": string|null,
}

export interface articleResponse {
    "status": number,
    "message": string,
    "data": articleData | null,
    "errors": string | null,
}
export interface articleData {
    "id": number,
    "title": string,
    "author": string,
    "authorId": number,
    "viewCount": number,
    "blocks": block[]
}