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
        <div id="dropZone" ref={setNodeRef} className='w-full h-full'>
            {children}
        </div>
    </>
    );
  }