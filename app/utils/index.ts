import { type block } from "~/types/article";
import { generateUUID } from "~/lib";

export const generateBlockElement = (blockType: string):block => {

    const blockElement:block = {
        "blockUuid": generateUUID(),
        "articleUuid": "",
        "blockType": blockType,
        "content": "",
        "childrenBlockUUid": [],
        "style": "",
        "url": "",
        "language": "",
    }
    return blockElement;
}