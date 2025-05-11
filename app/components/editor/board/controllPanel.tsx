"use client";

import { useState } from "react";

// 型
import { type block, type articleResponse, type articleData } from "~/types/article";

import { resisterArticle } from "~/utils/index";

type Props = {
    droppedItems: block[];
}

export default function controllPanel({droppedItems}: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fetchError, setFetchError] = useState<boolean>(false);

    const save = async () => {
        setIsLoading(true);
        const result:articleResponse = await resisterArticle(
            {
                "id": 0,
                "title": "test",
                "author": "sumple",
                "authorId": 1,
                "viewCount": 0,
                "blocks": droppedItems,
            } as articleData
        )
    }

    return (
        <>
            <aside className="absolute flex gap-1 top-3 right-8">
                <div className="">
                    <div className="relative right-1 -top-1 w-[567px] h-[100px] border-[1px] border-[#62BAA5] bg-transparent rounded-2xl"></div>
                    <div className="absolute top-0 py-2 pl-2 pr-3 w-[567px] h-[100px] border-[1px] border-[#62BAA5] bg-transparent rounded-2xl">
                        <ul className="w-full h-full flex gap-2 rounded-lg rounded-1 rounded-[#62BAA5]">
                            <li className="w-full h-full relative">
                                <button className="border-1 border-[#62BAA5] bg-white rounded-lg w-full h-full flex flex-col justify-between relative p-1 z-10 relative">
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                    <div className=" h-full flex gap-1 flex-col justify-center items-center">
                                        <div className="i-mdi-monitor-cellphone-star w-full h-10 text-[#62BAA5] block z-50 relative"></div>
                                        <p className="text-[#62BAA5] text-sm line-height-2 font-bold">プレビューを確認</p>
                                    </div>
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </button>     
                                <div className="h-[140%] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-2 rounded-full bg-[#62BAA5] z-0"></div>
                            </li>
                            <li className="w-full h-full relative">
                                <button className="border-1 border-[#62BAA5] bg-white rounded-lg w-full h-full flex flex-col justify-between relative p-1 z-10 relative">
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                    <div className=" h-full flex flex-col justify-center items-center">
                                        <div className="i-mdi-folder-open w-full h-11 text-[#62BAA5] block z-50 relative"></div>
                                        <p className="text-[#62BAA5] text-base line-height-2 font-bold">開く</p>
                                    </div>
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </button>
                                <div className="h-[140%] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-2 rounded-full bg-[#62BAA5] z-0"></div>
                            </li>
                            <li className="w-full h-full relative">
                                <button className="border-1 border-[#62BAA5] bg-white rounded-lg w-full h-full flex flex-col justify-between relative p-1 z-10 relative">
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                    <div className=" h-full flex flex-col justify-center items-center">
                                        <div className="i-mdi-content-save-edit w-full h-11 text-[#62BAA5] block z-50 relative"></div>
                                        <p className="text-[#62BAA5] text-sm line-height-2 font-bold">ローカルで保存</p>
                                    </div>
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-[#62BAA5] rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </button>
                                <div className="h-[140%] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-2 rounded-full bg-[#62BAA5] z-0"></div>
                            </li>
                            <li className="relative aspect-square h-full bg-[#62BAA5] rounded-lg">
                                <button onClick={(()=>{save()})} className="w-full h-full flex flex-col justify-between relative p-1 z-10">
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-white rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-white rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className={`${isLoading ? "i-mdi-sync spin-animation" : "i-mdi-content-save"} w-full h-10 text-white block z-50 relative`}></div>
                                        <p className="text-white font-bold text-base line-height-2">{isLoading ? "保存中" : "SAVE"}</p>
                                    </div>
                                    <div className="h-fit w-full flex justify-between items-center">
                                        <div className="bg-white rounded-full w-1.5 h-1.5"></div>
                                        <div className="bg-white rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </button>
                                <div className="h-[140%] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-2 rounded-full border-1 border-[#62BAA5] z-0"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-fit flex flex-col items-center gap-1.5 rotate-180">
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="27" viewBox="0 0 1 27">
                            <line id="線_22" data-name="線 22" y2="27" transform="translate(0.5)" fill="none" stroke="#62baa5" stroke-width="1" />
                        </svg>
                    </span>
                    <p style={{ writingMode: "vertical-rl" }} className="text-xs text-[#62BAA5]">2025.05.04</p>
                </div>
            </aside>
        </>
    );
}