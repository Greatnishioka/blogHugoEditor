import { useDroppable } from '@dnd-kit/core';
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

// 型
import { type block } from "~/types/article";

type Props = {
    children: React.ReactNode;
    droppedItems: block[];
}

export default function DropZone({ children, droppedItems }: Props) {
    const { setNodeRef, isOver } = useDroppable({ id: 'dropzone' });

    return (
        <>
            <SortableContext
                items={droppedItems.map((item) => item.blockUuid)}
            >
                <ul id="dropZone" ref={setNodeRef} className='flex flex-col gap-[10px] w-full h-full py-9 px-7 bg-[url("public/boardBg.png")]'>
                    {children}
                </ul>
            </SortableContext>
        </>
    );
}