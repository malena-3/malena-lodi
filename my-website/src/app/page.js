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

      {/* MAIN CONTENT */}
        {/* intro section */}
        <div className="border-1 p-5 flex">
          <Image
            className="rounded-full w-32 h-42"
            src="/header.jpeg"
            alt="my_icon"
            width="93"
            height="93"
          />
          <p className="text-center pt-9 pl-10 pr-20">Hello, my name is Malena Lodi, and I’m a Software Engineer. 
                              I like reading, outdoor activities, and sweet treats. 
                              This site is a small window into what I’ve been working on and what I care about.</p>
        </div>

        {/* project section */}
        <section className="bg-gray-100 p-6 mt-8 rounded-md shadow">
          <h2 className="text-xl font-bold mb-4">Featured Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { num: 1, title: "Community Ping", desc: "A prototype feature for SnapChat: React, SQL, APIs...", link: "https://github.com/malena-3/Snap-CommunityPing"},
              { num: 2, title: "Student Mobile App", desc: "A student resource app for Pasadena City College: TypeScript, Ionic Framework...", link:"https://github.com/malena-3/Snap-CommunityPing" },
              { num: 3, title: "Beetles, Bugs, & Butterflies Catelog", desc: ": JavaScript, HTML, & CSS.", link:"https://github.com/malena-3/Snap-CommunityPing" },
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



  {/* More button */}
  <div className="flex justify-end mt-4">
    <a href="/projects" className="text-sm text-green-800 hover:underline">
      more →
    </a>
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
