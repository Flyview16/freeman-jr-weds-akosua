import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="w-full height flex text-center items-center justify-center parallax relative text-white">
        <h1 className="text-5xl relative z-10">Freeman Jr weds Akosua</h1>
      </section>

      <section className="flex-none w-full brief-intro-padding border-t-[0.1rem] border-black text-size text-center tracking-wide">
        With hearts full of joy, Freeman Osei-Tete Jr. and Akosua Nyamekye
        invite you to witness and celebrate their union in marriage. Join us on
        December 20, 2025, at Living Word Assemblies of God as we begin our
        journey together as one.
      </section>

      <section className="flex flex-col w-full link-boxes-padding text-size text-center tracking-wide downward-curve text-white space-y-10">
        <div className="bg-white w-full flex-1 rounded">A</div>

        <div className="bg-white w-full flex-1 rounded">B</div>
        <div className="bg-white w-full flex-1 rounded">C</div>
      </section>

      <footer className="flex text-center items-center justify-center flex-none w-full text-lg tracking-wide border-[0.1rem] border-red-500">
        Made with ❤️ for Freeman Osei-Tete Jr and Akosua Nyamekye
      </footer>
    </div>
  );
}
