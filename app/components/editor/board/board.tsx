"use client";

import DropZone from './DropZone';

type Props = {
    droppedItems: string[];
}

export default function Board({droppedItems}: Props) {

    return (
        <>
            <div className="relative pl-[285px]">
                <div className="w-[963px] absolute top-6 px-5 z-10">
                    <h1 className="text-21 font-bold text-[#62BAA5] border-b-1 border-[#62BAA5]">BOARD</h1>
                </div>
                <div className="absolute flex top-23 rounded-lg w-[963px] h-[938px] rounded-lg bg-white border-1 border-[#62BAA5] px-6 pt-27">
                    <div className="bg-[#F4F5F8] border-[#C8D1D1] border-1 rounded-lg w-full h-full shadow-inner">
                        <DropZone>
                            {droppedItems.map(function (item, i) {
                                return (
                                    <div key={i} className="p-2 border border-[#ccc] bg-gray-50 mb-2">
                                        {item}
                                    </div>
                                );
                            })}
                        </DropZone>
                    </div>
                    <div className="">
                        <div className="w-40">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}