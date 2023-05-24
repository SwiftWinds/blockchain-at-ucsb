import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center px-4 pt-12 pb-24 m-0 leading-6 bg-white border-0 border-gray-200 border-none">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-screen-xl">
            <Hero />
          </div>
        </div>
      </div>
    </main>
  );
}
