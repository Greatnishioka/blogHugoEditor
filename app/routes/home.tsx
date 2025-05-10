import type { Route } from "./+types/home";

import Scene from "~/components/editor/scene";
import { type block } from "~/types/article";

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

  const testData: block[] = [
    {
      "blockUuid": "blockUuid1",
      "articleUuid": "articleUuid1",
      "blockType": "heading1",
      "content": "【驚愕！】強烈新規の登場でオッドアイズがついに環境デッキに！？",
      "childrenBlockUUid": [],
      "style": "",
      "url": "",
      "language": "",
    },
    {
      "blockUuid": "blockUuid2",
      "articleUuid": "articleUuid2",
      "blockType": "ul",
      "content": "",
      "childrenBlockUUid": ["uuid3"],
      "style": "",
      "url": "",
      "language": "",
    },
    {
      "blockUuid": "blockUuid3",
      "articleUuid": "articleUuid3",
      "blockType": "li",
      "content": "",
      "childrenBlockUUid": ["uuid4"],
      "style": "",
      "url": "",
      "language": "",
    },
    {
      "blockUuid": "blockUuid4",
      "articleUuid": "articleUuid4",
      "blockType": "a",
      "content": "",
      "childrenBlockUUid": [],
      "style": "",
      "url": "https://www.google.co.jp/",
      "language": "",
    },
    {
      "blockUuid": "blockUuid5",
      "articleUuid": "articleUuid5",
      "blockType": "p",
      "content": "ついにオッドアイズの新規が登場しました！",
      "childrenBlockUUid": [],
      "style": "",
      "url": "",
      "language": "",
    }
]
  return (
  <>
    <Scene items={testData} />
  </>
  );
}
