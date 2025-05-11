"use client";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { type block } from "~/types/article";

type Props = {
    content: block
}

export default function Hedding3({content}: Props) {

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
      } = useSortable({
        id: content.blockUuid,
      });

    const [text, setText] = useState<string>(content.content);
    const updateContent = (text:string) => {
        setText(text);
        content.content = text;
    }

    return (
        <>
            <div 
                ref={setNodeRef}
                {...attributes}
                style={{
                    transform: CSS.Transform.toString(transform),
                    transition,
                }}
                className="w-full border-1 border-[#ABE1D4] rounded-3xl bg-white text-[#62BAA5] pt-3 pb-[26px] heading-color hover:heading-color-strong"
            >
                <div {...listeners} className="flex justify-between pb-2 px-5 border-b-[1px] border-[#ABE1D4]">
                    <hgroup className="flex gap-7 items-center">
                        <h3 className="text-[27px] font-bold">見出し3</h3>
                        <p className="text-sm">Heading3</p>
                    </hgroup>
                    <div className="h-10 w-10 i-mdi-blur"></div>
                </div>
                <div className="pt-4 px-5">
                    <label htmlFor={content.blockUuid} className="w-full h-fit rounded-xl bg-[#F4F5F8] block flex items-center px-2">
                        <textarea 
                            onChange={((e) => { 
                                updateContent(e.target.value);
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            })}
                            id={content.blockUuid} className="w-full h-full bg-transparent border-none outline-none font-500 text-[#69676A] py-2"
                            value={text}
                            placeholder="ここに見出しを入力"
                        />
                    </label>
                </div>
            </div>
        </>
    );
}