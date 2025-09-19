import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="w-full height flex text-center items-center justify-center parallax relative text-white">
        <h1 className="text-5xl relative z-10">Freeman Jr weds Akosua</h1>
      </main>

      <section className="flex-none w-full padding border-t-[0.1rem] border-black text-size text-center tracking-wide">
        Hello! We are Freeman Osei-Tete Jr. and Akosua Nyamekye, and we are
        getting married. The celebration of our union will occur in Living Word
        A/G on December 20, 2025, and we would love for you to join us.
      </section>

      <footer className="flex text-center items-center justify-center flex-none w-full text-lg tracking-wide border-[0.1rem] border-red-500">
        Made with ❤️ for Freeman Osei-Tete Jr and Akosua Nyamekye
      </footer>
    </div>
  );
}
