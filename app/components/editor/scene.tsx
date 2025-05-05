"use client";
import { useState } from "react";
import { DndContext } from '@dnd-kit/core';

import SideVar from "~/components/editor/sidevar/sidevar";
import Board from "~/components/editor/board/board";

export default function Home() {

    const [droppedItems, setDroppedItems] = useState<string[]>([]);

    function handleDragEnd(event: any) {
        const { active, over } = event;
        if (over && over.id === 'dropzone') {
            setDroppedItems((prev) => [...prev, active.id]);
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
