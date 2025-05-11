import type { Route } from "./+types/home";

import Scene from "~/components/editor/scene";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// 記事内容の修正の場合はもうちょっと考える
export async function loader() {
  // const response = await fetch('');
  // const posts = await response.json();
  return {
    message: "こんにちは!",
  };
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {


  return (
  <>
    <Scene />
  </>
  );
}
