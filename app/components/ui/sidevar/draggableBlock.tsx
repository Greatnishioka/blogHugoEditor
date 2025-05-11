import { useEffect, useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

type Props = {
    title:string;
    description:string;
    id: string;
    colorMode:string;
}

export default function DraggableBlock({ id,title,colorMode,description }: Props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id,data: { from: "sidebar" } });
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // この実装方法は流石に最低なのであとで考え直す
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <div 
                style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : '' }}
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                className={`transition-opacity duration-600 w-full p-[6px] bg-white rounded-lg border-[1px] cursor-pointer ${isVisible ? "opacity-100" : "opacity-0"} ${colorMode}-color hover:${colorMode}-color-strong z-60`}
            >
                <div className={`pb-[6px] border-b-[1px] ${colorMode}-b-color`}>
                    <h4 className="text-base text-center font-bold">{title}</h4>
                </div>
                <div className="pt-[6px] text-xs">
                    <p className="">{description}</p>
                </div>
            </div>
        </>
    );
}