"use client";
import { useState } from "react";
import { DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import SideVar from "~/components/ui/sidevar/sidevar";
import Board from "~/components/editor/board/board";

import { generateBlockElement } from "~/utils/index";

import { type block } from "~/types/article";

type Props = {
    items?: block[];
}

export default function Home({ items }: Props) {

    const [droppedItems, setDroppedItems] = useState<block[]>(items || []);

    const handleDragEnd = (event: any) => {
        if (!event.over) {
            return;
        }
        const { active, over } = event;
        const isFromSidebar = active.data?.current?.from === "sidebar";

        if (isFromSidebar && over.id === "dropzone") {
            setDroppedItems((prev) => [...prev, generateBlockElement(active.id)]);
            return;
        }

        if (!isFromSidebar && active.id !== over.id) {
            const oldIndex = droppedItems.findIndex((item) => item.blockUuid === active.id);
            const newIndex = droppedItems.findIndex((item) => item.blockUuid === over.id);

            if (oldIndex !== -1 && newIndex !== -1) {
                setDroppedItems((prev) => {
                    const newList = arrayMove(prev, oldIndex, newIndex);
                    return newList;
                });
            }
        }
    }

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
