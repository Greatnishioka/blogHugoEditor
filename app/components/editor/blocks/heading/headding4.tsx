"use client";
import { useState } from "react";

import { type block } from "~/types/article";

type Props = {
    content: block
}

export default function Hedding4({content}: Props) {

    const [text, setText] = useState<string>("");
    return (
        <>
            <div className="w-full border-1 border-[#ABE1D4] rounded-3xl bg-white text-[#62BAA5] pt-3 pb-[26px] heading-color">
                <div className="pb-2 px-5 border-b-[1px] border-[#ABE1D4]">
                    <hgroup className="flex gap-7 items-center">
                        <h3 className="text-[27px] font-bold">見出し4</h3>
                        <p className="text-sm">Heading4</p>
                    </hgroup>
                </div>
                <div className="pt-4 px-5">
                    <label htmlFor={content.blockUuid} className="w-full h-12 rounded-xl bg-[#F4F5F8] block flex items-center px-2">
                        <input onChange={((e) => { setText(e.target.value) })} id={content.blockUuid} type="text" className="w-full h-full bg-transparent border-none outline-none font-500 text-[#69676A]" value={text} placeholder="ここに見出しを入力" />
                    </label>
                </div>
            </div>
        </>
    );
}