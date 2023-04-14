import HeroCards from "@/components/HeroCards";
import TopCard from "@/components/TopCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary w-screen">
      <div className="m-10">
        <TopCard />
      </div>
    </main>
  );
}
