import Image from "next/image";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-16 px-16 bg-white rounded-3xl">
        <Hero />
      </main>
    </div>
  );
}
