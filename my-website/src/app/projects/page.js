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
        <p className="text-sm italic pl-1">everything in time</p>
      </div>
      
      
      {/* project section */}
        {/* FEATURED PROJECTS */}
              <section className="bg-gray-100 p-6 mt-8 rounded-md shadow">
                <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { num: 1, title: "Community Ping", desc: "A prototype feature for SnapChat: React, SQL, APIs...", link: "https://github.com/malena-3/Snap-CommunityPing"},
                    { num: 2, title: "Student Mobile App", desc: "A student resource app for Pasadena City College: TypeScript, Ionic Framework...", link:"https://github.com/malena-3/mobile-app-pcc" },
                    { num: 3, title: "Beetles, Bugs, & Butterflies Catelog", desc: ": JavaScript, HTML, & CSS.", link:"https://github.com/malena-3/theBBAndBCatalog" },
                  ].map(({ num, title, desc, link }) => (
                    <a
                    key={num}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group [perspective:1000px] block"
                  >
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
                          alt={title}
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
                        <p>
                          <strong>{title}. </strong>{desc}
                        </p>
                      </div>
                    </div>
                  </a>
          ))}
        </div>
      {/* MORE PROJECTS */}
        <h2 className="mt-8 text-xl font-bold mb-4">More Projects</h2>
      
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { num: 4, title: "Book Renting System", desc: "Final project for Object Oriented Programming course: C++", link: "https://github.com/malena-3/school_book_renting_system"},
                    { num: 5, title: "TBD", desc: "", link:"" },
                    { num: 6, title: "TBD", desc: "", link:"" },
                  ].map(({ num, title, desc, link }) => (
                    <a
                    key={num}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group [perspective:1000px] block"
                  >
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
                          alt={title}
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
                        <p>
                          <strong>{title}. </strong>{desc}
                        </p>
                      </div>
                    </div>
                  </a>
          ))}
        </div>

</section>
      {/* FOOTER CONTENT */}
       {/* info about website */}
       <footer className="mt-8 text-xs italic text-gray-500 text-center">
          <p>Built using Next.js, React, and Tailwind CSS. Deployed with Vercel.</p>
       </footer>

    </main>
  );
}
