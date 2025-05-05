import {
    useDraggable
} from '@dnd-kit/core';

type Props = {
    id: string
}

export default function DraggableBlock({ id }: Props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    return (
        <>
            <div 
                style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : '' }}
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                className="w-full p-[6px] bg-white rounded-lg border-[1px] border-[#ABE1D4] shadow-md shadow-[#ABE1D4] cursor-grab"
            >
                <div className="pb-[6px] border-b-[1px] border-[#62BAA5]">
                    <h4 className="text-base text-center font-bold">見出し1</h4>
                </div>
                <div className="pt-[6px] text-xs">
                    <p className="">記事の見出しを作成するブロックです。</p>
                </div>
            </div>
        </>
    );
}