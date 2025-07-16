import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-serif pl-2 pr-2">
        <section className="bg-gray">
            <Image
                src="/header1.jpeg"
                alt="malena's resume"
                width="20"
                height="10"

            />

        </section>
      


      
    </main>
  );
}