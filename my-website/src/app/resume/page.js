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

      {/* MAIN CONTENT */}
        {/* RESUME CONTENT */}
        {/* <section className="bg-blue-50 rounded-md mt-5 p-2 w-230"> */}

        <section className="flex flex-col items-center mt-5">
          <h2 className="flex justify-center text-xl font-bold mb-4 text-center text-gray-500">Resume Preview</h2>
           <a 
              href="/Malena-Lodi-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <Image
              src="/resume-preview.png"
              alt="Preview of Malena Lodi's Resume"
              width={600}
              height={800}
              className="rounded-md hover:shadow-xl transition"
            />
            </a>
        </section>
        {/* </section> */}

        
        

      




      {/* FOOTER CONTENT */}
       {/* info about website */}
       <footer className="mt-8 text-sm italic text-gray-500 text-center">
          <p>this website was created using dadadada</p>
       </footer>


      
    </main>
  );
}

