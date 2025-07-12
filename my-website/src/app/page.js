import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-serif pl-2 pr-2">
      {/* HEADER CONTENT */}
      <header className="text-left pt-20">
        <h1 className="pb-3 text-black text-3xl font-bold ">welcome</h1>
        <p>hyperlinks here</p>
      </header>
      <div className="bg-gray-100">
        <p className="text-sm italic">some quote</p>
      </div>

      {/* MAIN CONTENT */}
        {/* intro section */}
        <div className="border-1 p-13 flex">
          <Image
            className="rounded-full w-32 h-32"
            src="/header1.jpeg"
            alt="my_icon"
            width="33"
            height="33"
          />
          <p className="pl-3">My intro, what motivates me, and what I love</p>
        </div>

        {/* project section */}
        <section className="bg-gray-100 p-6 mt-8 rounded-md shadow">
          <h2 className="text-xl font-bold mb-4">Featured Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
          <div key={num} className="group perspective">
          <div className="relative w-full h-48 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">

          {/* Front */}
          <div className="absolute inset-0 backface-hidden">
            <Image
              src={`/header${num}.jpeg`} 
              alt={`Project ${num}`}
              fill
              className="object-cover rounded-md"
                />
            </div>

          {/* Back */}
          <div className="absolute inset-0 bg-white flex items-center justify-center text-center text-sm p-4 rotate-y-180 backface-hidden rounded-md shadow">
            <p>Project {num} description goes here.</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  {/* More button */}
  <div className="flex justify-end mt-4">
    <a href="/projects" className="text-sm text-blue-500 hover:underline">
      more →
    </a>
  </div>
</section>


      {/* FOOTER CONTENT */}
       {/* info about website */}


      
    </main>
  );
}
