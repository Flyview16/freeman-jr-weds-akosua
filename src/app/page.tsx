export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="hidden md:flex flex-none w-full border-[0.1rem] border-red-500">
        Header
      </header>

      <main className="w-full h-[120vh] flex items-center justify-center parallax relative text-white">
        <h1 className="text-5xl relative z-10">Freeman Jr weds Akosua</h1>
      </main>

      <section className="flex-none w-full p-8">
        <p className="text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </section>

      <footer className="flex text-center items-center justify-center flex-none w-full text-lg tracking-wide border-[0.1rem] border-red-500">
        Made with ❤️ for Freeman Osei-Tete Jr and Akosua Nyamekye
      </footer>
    </div>
  );
}
