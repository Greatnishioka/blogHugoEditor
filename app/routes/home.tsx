import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <>
      <button className="w-[500px] h-[500px] i-mdi-heart inline-block text-red hover:text-[#000] transition-colors duration-100 ease-linear">aaa</button>
  </>
  );
}
