import Image from "next/image";
import HomePage from "@/components/_home/homepage";
import Presentation from "@/components/_home/presentation";
import Questions from "@/components/_home/questions"
import Carousel from "@/components/_home/headerpage";
import Contacts from "@/components/_home/contact";

export default function Home() {
  return (
    <>
    {/* <HomePage /> */}
    <Carousel />
    <Presentation />
    <Questions />
    <Contacts />
    </>
  );
}
