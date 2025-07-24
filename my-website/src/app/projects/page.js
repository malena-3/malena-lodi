import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-serif pl-2 pr-2 m-7">
      {/* HEADER CONTENT */}
      <header className="text-left pt-20">
        <h1 className="pb-3 text-black text-3xl font-bold ">malena lodi</h1>
        <div className="text-blue-800">
          <p>
            <a href="/" className="underline">home</a> |
            <a href="/contact" className="underline">contact</a> | 
            <a href="/resume" className="underline">resume</a> | 
            <a href="/projects" className="underline">projects</a>
          </p>
        </div>
      </header>
      <div className="bg-gray-100">
        <p className="text-sm italic">some quote</p>
      </div>
      
      
      {/* project section */}
      <section className="bg-gray-100 p-6 mt-5 mb-5 rounded-md shadow">
    
        <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className="group [perspective:1000px]">
              <div
                className="relative w-full h-48 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={`/header${num}.jpeg`}
                    alt={`Project ${num}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
      
                {/* Back */}
                <div
                  className="absolute inset-0 bg-white flex items-center justify-center text-center text-sm p-4 rounded-md shadow"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p>Project {num} description goes here.</p>
                </div>
              </div>
            </div>
          ))}
        </div>

</section>


    </main>
  );
}
