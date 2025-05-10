import {
    useDroppable
} from '@dnd-kit/core';

type Props = {
    children: React.ReactNode;
}

export default function DropZone({children}: Props) {
    const { setNodeRef, isOver } = useDroppable({ id: 'dropzone' });
    
    return (
    <>
        <div id="dropZone" ref={setNodeRef} className='flex flex-col gap-[10px] w-full h-full py-9 px-7 bg-[url("public/boardBg.png")]'>
            {children}
        </div>
    </>
    );
  }