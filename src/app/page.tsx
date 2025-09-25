import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="w-full height flex text-center items-center justify-center parallax relative text-white">
        <h1 className="text-5xl relative z-10">Freeman Jr weds Akosua</h1>
      </section>

      <section className="flex-none w-full brief-intro-padding text-size text-center tracking-wide">
        With hearts full of joy, Freeman Osei-Tete Jr. and Akosua Nyamekye
        invite you to witness and celebrate their union in marriage. Join us on
        December 20, 2025, at Living Word Assemblies of God as we begin our
        journey together as one.
      </section>

      <section className="flex-none w-full brief-intro-padding text-size text-center tracking-wide">
        <span>Find the location</span>
      </section>

      <section className="flex flex-col w-full link-boxes-padding py-16 px-8 md:py-32 md:px-40 text-size text-center tracking-wide downward-curve text-white space-y-6 md:space-y-16">
        <div className="min-h-[27rem] flex bg-white w-full rounded-xl hover:scale-110 transition-transform duration-500">
          <div className="flex-1 flex flex-col justify-center items-left bg-white text-black text-left py-2 px-2 md:py-20 md:px-15 rounded-xl">
            <h1 className="pb-4 font-black">Our Story</h1>
            <h2 className="py-4 text-2xl">Read our story of love</h2>
            <div className="bg-black text-white w-[70%] rounded-3xl text-center py-3 text-xl font-bold mt-4 cursor-pointer hover:bg-red-500 hover:text-black transition-colors duration-200">
              <span className="text-lg">Read on&nbsp;&nbsp;&nbsp;</span>
              <span>→</span>
            </div>
          </div>

          <div className="flex-2 py-2 px-2 md:py-2 md:px-2 curve-left">
            <img
              src="/test-image.jpg"
              alt="Description"
              className="w-full h-full object-cover z-0"
            />
          </div>
        </div>

        <div className="min-h-[27rem] flex bg-white w-full rounded-xl hover:scale-110 transition-transform duration-500">
          <div className="flex-1 flex flex-col justify-center items-left bg-white text-black text-left py-2 px-2 md:py-20 md:px-15 rounded-xl">
            <h1 className="pb-4 font-black">Program Outline</h1>
            <h2 className="py-4 text-2xl">
              Discover the details of our celebration
            </h2>
            <div className="bg-black text-white w-[90%] rounded-3xl text-center py-3 text-xl font-bold mt-4 cursor-pointer hover:bg-red-500 hover:text-black transition-colors duration-200">
              <span className="text-lg">See the program&nbsp;&nbsp;&nbsp;</span>
              <span>→</span>
            </div>
          </div>

          <div className="flex-2 py-2 px-2 md:py-2 md:px-2 curve-left">
            <img
              src="/test-image.jpg"
              alt="Description"
              className="w-full h-full object-cover z-0"
            />
          </div>
        </div>

        <div className="min-h-[27rem] flex bg-white w-full rounded-xl hover:scale-110 transition-transform duration-500">
          <div className="flex-1 flex flex-col justify-center items-left bg-white text-black text-left py-2 px-2 md:py-20 md:px-15 rounded-xl">
            <h1 className="pb-4 font-black">Support Us</h1>
            <h2 className="py-4 text-2xl">FInd out how you can support us</h2>
            <div className="bg-black text-white w-[70%] rounded-3xl text-center py-3 text-xl font-bold mt-4 cursor-pointer hover:bg-red-500 hover:text-black transition-colors duration-200">
              <span className="text-lg">Support&nbsp;&nbsp;&nbsp;</span>
              <span>→</span>
            </div>
          </div>

          <div className="flex-2 py-2 px-2 md:py-2 md:px-2 curve-left">
            <img
              src="/test-image.jpg"
              alt="Description"
              className="w-full h-full object-cover z-0"
            />
          </div>
        </div>
      </section>

      <footer className="flex text-center items-center justify-center flex-none w-full text-lg tracking-wide border-[0.1rem] border-red-500">
        Made with ❤️ for Freeman Osei-Tete Jr and Akosua Nyamekye
      </footer>
    </div>
  );
}
