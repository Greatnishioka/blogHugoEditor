"use client";
import { useState } from "react";

export default function Board() {

  return (
    <>
        <div className="relative pl-[285px]">
            <div className="absolute top-6 pl-5 w-full z-10">
                <h1 className="text-21 font-bold text-[#62BAA5]">BOARD</h1>
            </div>
            <div className="absolute top-23 rounded-lg w-[963px] h-[938px] rounded-lg bg-white border-1 border-[#62BAA5]">
                
            </div>
        </div>
    </>
  );
}