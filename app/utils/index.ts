import { generateUUID } from "~/lib";

// 型
import { type block, type articleResponse, type articleData } from "~/types/article";

// .envから取得した情報
import { backendUrl } from "~/config/index";

export const generateBlockElement = (blockType: string):block => {

    const uuid = generateUUID();

    const blockElement:block = {
        // このidはDnd-kitを扱う上で必須
        "id": uuid,
        // このUUIDはバックエンドがわでDBに突っ込むためのもの
        "blockUuid": uuid,
        "articleUuid": "",
        "blockType": blockType,
        "content": "",
        "parentBlockUUid": "",
        "style": "",
        "url": "",
        "language": "",
    }
    return blockElement;
}

export const resisterArticle = async (articleData: articleData): Promise<articleResponse> => {
    const response = await fetch(`${backendUrl}/api/v1/article`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
    });

    if (!response.ok) {
        throw new Error('response error');
    }

    const data: articleResponse = await response.json();
    return data;
};