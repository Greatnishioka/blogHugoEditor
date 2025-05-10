"use client";
import { useState } from "react";
import { DndContext } from '@dnd-kit/core';

import SideVar from "~/components/ui/sidevar/sidevar";
import Board from "~/components/editor/board/board";

import { generateBlockElement } from "~/utils/index";

import { type block } from "~/types/article";

type Props = {
    items: block[];
}

export default function Home({items}: Props) {

    const [droppedItems, setDroppedItems] = useState<block[]>(items);
    const [droppedItemsId, setDroppedItemsId] = useState<string[]>(
        items.map((item) => item.articleUuid)
    );

    const handleDragEnd = (event: any) => {
        const { active, over} = event;
        if (over && over.id === 'dropzone') {
            setDroppedItemsId((prev) => [...prev, active.id]);
            setDroppedItems((prev) => [...prev, generateBlockElement(active.id)]);
        }
    }

    console.log(droppedItems);

    return (
        <>
            <main className="bg-[#FAF6F0] h-screen overflow-hidden">
                <DndContext onDragEnd={handleDragEnd}>
                    <SideVar />
                    <Board droppedItems={droppedItems} />
                </DndContext>
            </main>
        </>
    );
}
