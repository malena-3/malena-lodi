import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-serif pl-2 pr-2">
      {/* HEADER CONTENT */}
      <header className="text-left pt-20">
        <h1 className="pb-3 text-black text-3xl font-bold ">malena lodi</h1>
        <div className="text-blue-800">
          <p><a href="/contact" className="underline">contact</a> | <a href="/resume" className="underline">resume</a> | <a href="/projects" className="underline">projects</a></p>
        </div>
      </header>
      <div className="bg-gray-100">
        <p className="text-sm italic">some quote</p>
      </div>

      {/* MAIN CONTENT */}
        {/* project section */}
        <section className="bg-gray-100 p-6 mt-8 rounded-md shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>

            <p className="flex justify-between">
                <span className="font-bold text-gray-600">Email:</span> 
                <span>malenalodi3@gmail.com</span>
                <span className="text-green-800 font-bold">Send Email</span>
            </p>
            <p className="flex justify-between">
                <span className="font-bold text-gray-600">Phone Number:</span> 
                <span>(626) 755-8760)</span>
                <span className="text-green-800 font-bold">Make Call</span>
            </p>  
        </section>
        <div className="border-1 p-13 flex mt-3">
            <p className="text-center">Leave a message</p>
        </div>




      {/* FOOTER CONTENT */}
       {/* info about website */}
       <footer className="mt-8 text-sm italic text-gray-500 text-center">
          <p>this website was created using dadadada</p>
       </footer>


      
    </main>
  );
}

