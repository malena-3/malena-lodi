import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-serif pl-2 pr-2">
      <header className="text-left pt-20">
        <h1 className="pb-3 text-black text-3xl font-bold ">welcome</h1>
        <p>hyperlinks here</p>
      </header>
      <div className="bg-gray-100">
        <p className="text-sm italic">some quote</p>
      </div>

      {/* MAIN CONTENT */}

        <div className="border-1 p-13 flex">
          <Image
            class="rounded-full w-32 h-32"
            src="/header1.jpeg"
            alt="my_icon"
            width="33"
            height="33"
          />
          <p className="pl-3">My intro, what motivates me, and what I love</p>

        </div>

      
    </main>
  );
}
