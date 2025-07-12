import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-serif pl-2 pr-2">
      {/* HEADER CONTENT */}
      <header className="text-left pt-20">
        <h1 className="pb-3 text-black text-3xl font-bold ">more projects</h1>
        <p>github hyperlink here</p>
      </header>
      <div className="bg-gray-100">
        <p className="text-sm italic">some quote</p>
      </div>

      <div className="flex justify-end mt-4">
        <a href="/" className="text-sm text-blue-500 hover:underline">
        home →
        </a>
      </div>
    </main>
  );
}
