"use client";
import { useState } from "react";

import Heading from "./sidevarHeading";
import Text from "./sidevarText";
import ListTable from "./sidevarListTable";
import SidevarOther from "./sidevarOther";

export default function SideVar() {

  const [sidevarIsOpenState, setSidevarIsOpenState] = useState<Record<string, boolean>>({
    heading: true,
    text: false,
    listTable: false,
    sidevarOther: false,
  });

  const handleTabChange = (tabName: string) => {
    setSidevarIsOpenState((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as Record<string, boolean>);
      return {
        ...newState,
        [tabName]: true,
      };
    });
  };

  return (
    <>
    <aside className="absolute flex">
      <div className={`px-[10px] pt-6 transition-colors duration-300 z-50 ${Object.entries(sidevarIsOpenState).find(([key, value]) => value)?.[0]}`} >
        <div className="w-[163px] h-screen rounded-xl bg-[#F4F5F8] border-[1px] border-[#C5D3D3] p-2 shadow-inner">
          <div className="w-full p-[6px] bg-white rounded-lg border-[1px] border-[#ABE1D4] shadow-md shadow-[#ABE1D4]">
            <div className="pb-[6px] border-b-[1px] border-[#62BAA5]">
              <h4 className="text-base text-center font-bold">見出し1</h4>
            </div>
            <div className="pt-[6px] text-xs">
              <p className="">記事の見出しを作成するブロックです。</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="relative w-fit h-full">
        <Heading focus={sidevarIsOpenState.heading} handleTabChange={() => handleTabChange("heading")}>
          <div className="w-full p-[6px] bg-white rounded-lg border-[1px] border-[#ABE1D4] shadow-md shadow-[#ABE1D4]">
            <div className="pb-[6px] border-b-[1px] border-[#62BAA5]">
              <h4 className="text-base text-center font-bold">見出し1</h4>
            </div>
            <div className="pt-[6px] text-xs">
              <p className="">記事の見出しを作成するブロックです。</p>
            </div>
          </div>
        </Heading>
        <Text focus={sidevarIsOpenState.text} handleTabChange={() => handleTabChange("text")}>
          <div className="w-full p-[6px] bg-white rounded-lg border-[1px] border-[#E86968] shadow-md shadow-[#E86968]">
            <div className="pb-[6px] border-b-[1px] border-[#E86968]">
              <h4 className="text-base text-center font-bold">見出し2</h4>
            </div>
            <div className="pt-[6px] text-xs">
              <p className="">記事の見出しを作成するブロックです。</p>
            </div>
          </div>
        </Text>
        <ListTable focus={sidevarIsOpenState.listTable} handleTabChange={() => handleTabChange("listTable")} />
        <SidevarOther focus={sidevarIsOpenState.sidevarOther} handleTabChange={() => handleTabChange("sidevarOther")}>
          <div className="w-full p-[6px] bg-white rounded-lg border-[1px] border-[#E86968] shadow-md shadow-[#E86968]">
            <div className="pb-[6px] border-b-[1px] border-[#E86968]">
              <h4 className="text-base text-center font-bold">見出し5</h4>
            </div>
            <div className="pt-[6px] text-xs">
              <p className="">記事の見出しを作成するブロックです。</p>
            </div>
          </div>
        </SidevarOther>
      </ul>
    </aside>
    </>
  );
}