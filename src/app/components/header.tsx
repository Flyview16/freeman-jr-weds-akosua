export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-center items-center w-full py-4 shadow-sm hidden md:flex">
      <nav className="flex items-center space-x-15">
        <a
          href="#home"
          className="text-lg font-medium text-black hover:text-red-300 transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#our-story"
          className="text-lg font-medium text-black hover:text-red-300 transition-colors duration-200"
        >
          Our Story
        </a>
        <a
          href="#program"
          className="text-lg font-medium text-black hover:text-red-300 transition-colors duration-200"
        >
          Program Outline
        </a>
        <a
          href="#support"
          className="text-lg font-medium text-black hover:text-red-300 transition-colors duration-200"
        >
          Support Us
        </a>
      </nav>
    </header>
  );
}
