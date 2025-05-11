// tsx要素を生成する必要がある場合はこっちのスクリプトを使用する
import React from "react";
import { type block } from "../types/article";
import Hedding1 from '../components/editor/blocks/heading/headding1';
import Hedding2 from '../components/editor/blocks/heading/headding2';
import Hedding3 from '../components/editor/blocks/heading/headding3';
import Hedding4 from '../components/editor/blocks/heading/headding4';
import Hedding5 from '../components/editor/blocks/heading/headding5';
import Hedding6 from '../components/editor/blocks/heading/headding6';


export const generateBlock = (item:block, index:number) => {

    switch (item.blockType) {
        case "heading1":
            return <Hedding1 key={index} content={item} />
        case "heading2":
            return <Hedding2 key={index} content={item} />
        case "heading3":
            return <Hedding3 key={index} content={item} />
        case "heading4":
            return <Hedding4 key={index} content={item} />
        case "heading5":
            return <Hedding5 key={index} content={item} />
        case "heading6":
            return <Hedding6 key={index} content={item} />
        case "a":
            return 
        default:
            return 
    }
}