import BannerImg from "./assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons (Hug content padding like Figma) */}
          <div className="mt-6 flex flex-row items-center justify-center md:justify-start gap-3">
            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-all">
              Explore Technologies
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image Container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={BannerImg}
            alt="Dev Stack Illustration"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
