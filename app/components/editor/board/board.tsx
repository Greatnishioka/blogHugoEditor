"use client";
import React from 'react';
// ライブラリからのインポート
import DropZone from './dropZone';

// コンポーネント
import ControllPanel from './controllPanel';

// 型
import { type block } from "~/types/article";

// 関数
import { generateBlock } from '~/utils/ganerateBlock';

type Props = {
    droppedItems: block[];
}

export default function Board({ droppedItems }: Props) {

    return (
        <>
            <div className="relative pl-[285px]">
                <div className="w-[calc(100%-305px)] absolute top-6 px-5 z-10">
                    <h1 className="text-21 font-bold text-[#62BAA5] border-b-1 border-[#62BAA5]">BOARD</h1>
                </div>
                <div className="w-[calc(100%-305px)] absolute flex top-23 rounded-lg h-[calc(110vh-112px)] rounded-lg bg-white border-1 border-[#62BAA5] px-6 pt-27 pb-12">
                    <div className="bg-[#F4F5F8] border-[#C8D1D1] border-1 rounded-lg w-full h-full shadow-inner">
                        <DropZone droppedItems={droppedItems}>
                            {droppedItems.map(function (item, index) {
                                return (
                                    <li key={item.blockUuid}>
                                        {generateBlock(item, index)}
                                    </li>
                                );
                            })}
                        </DropZone>
                    </div>
                </div>
                <ControllPanel droppedItems={droppedItems} />
            </div>
        </>
    );
}