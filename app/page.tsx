import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-3 md:p-5 lg:p-12">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between p-6 md:p-16 bg-white rounded-2xl lg:rounded-3xl overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}
