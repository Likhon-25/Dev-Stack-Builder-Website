import FooterLogo from "./assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white pt-12 pb-8 text-slate-600">
      <div className="container mx-auto px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
          {/* Left Side: Brand Info */}
          <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">
            {/* Logo Image Tag */}
            <div className="mb-4">
              <img
                src={FooterLogo}
                alt="Dev Stack Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3 md:gap-4 text-sm font-semibold text-slate-800">
              <a href="" className="hover:text-pink-600 transition-colors">
                GitHub
              </a>
              <span className="md:hidden text-slate-300">•</span>
              <a href="" className="hover:text-pink-600 transition-colors">
                Twitter
              </a>
              <span className="md:hidden text-slate-300">•</span>
              <a href="" className="hover:text-pink-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Links (Desktop grid / Hidden on Mobile) */}
          <div className="hidden md:grid md:col-span-7 grid-cols-3 gap-6">
            {/* Product Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#home"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-slate-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center md:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
