import type { Route } from "./+types/home";

import SideVar from "~/components/editor/sidevar/sidevar";
import Board from "~/components/editor/board/board";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <>
    <main className="bg-[#FAF6F0] h-screen overflow-hidden">
      <SideVar />
      <Board />
    </main>
  </>
  );
}
