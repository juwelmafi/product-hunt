// components/Banner.jsx
import React from "react";

export const Banner = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex bg-gray-50 flex-col items-center justify-center max-w-2xl px-4 mx-auto sm:max-w-xl md:max-w-2xl md:px-8">
      {/* Tag */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            New Arrival
          </p>
        </div>

        {/* Heading */}
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="pattern-gadget"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#pattern-gadget)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Discover</span>
          </span>{" "}
          the latest gadgets for your lifestyle
        </h2>

        {/* Description */}
        <p className="text-base text-gray-700 md:text-lg">
          Explore cutting-edge technology, innovative gadgets, and smart devices designed to make your life easier and more enjoyable.
        </p>
      </div>

      {/* Subscription Form */}
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input
          placeholder="Search you desire"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-emerald-600 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-emerald-600 hover:bg-emerald-700 focus:shadow-outline focus:outline-none"
        >
          Search
        </button>
      </form>

      {/* Small note */}
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        Stay updated with the latest gadgets and technology trends.
      </p>

      {/* Gadget Image */}
      <img
        src="/banner.png"
        className="w-full mx-auto md:w-auto"
        alt="Gadget"
      />
    </div>
    </div>
  );
};
