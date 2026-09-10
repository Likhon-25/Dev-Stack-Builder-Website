import NavLogo from "./assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile View Left: Hamburger Icon (Static) */}
        <div className="flex md:hidden items-center">
          <button className="text-gray-700 text-2xl cursor-default">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Brand Logo (Mobile Center / Desktop Left) */}
        <div className="flex items-center">
          <img
            src={NavLogo}
            alt="Dev Stack"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation Links (Desktop Center Only) */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#home" className="text-pink-600 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="hover:text-gray-900 transition-colors"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-900 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Auth Buttons (Visible on Mobile & Desktop) */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="text-xs md:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-1">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-medium text-white shadow-sm hover:bg-pink-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
