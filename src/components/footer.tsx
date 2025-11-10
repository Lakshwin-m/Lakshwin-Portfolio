import React from "react";

// Marquee Component
function Marquee({ items }: { items: string[] }) {
  const createMarqueeContent = () => {
    const content = [];
    // Repeat the items multiple times to ensure seamless looping
    const repeatedItems = [...items, ...items, ...items];

    repeatedItems.forEach((item, index) => {
      content.push(
        <span
          key={`item-${index}`}
          className="mx-2 text-md font-medium tracking-wider"
        >
          {item}
        </span>
      );
    });
    return content;
  };

  return (
    <div className="relative flex w-full overflow-x-hidden border-1 border-2 border-black bg-white text-black">
      <div className="animate-marquee whitespace-nowrap py-1">
        {createMarqueeContent()}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
        {createMarqueeContent()}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Footer Component
export function Footer() {
  const items = ["ꕤ CREATIVITY", "◊ COLLABORATION", "✦ INNOVATION", "✱ IMPACT"];

  return (
    <footer className="bg-white">
      {/* Marquee Section */}
      <div className="py-2 h-8">
        <Marquee items={items} />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left Column - Main Message */}
          <div className="flex-shrink-0">
            <h2 className="text-3xl md:text-5xl font-medium mb-6 whitespace-nowrap">
              Thanks for stopping by! ✿
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              -Made with ❤️ and a good playlist.
            </p>
          </div>

          {/* Right Side - Contact and Navigation */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:ml-auto">
            {/* Contact */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-gray-900">
                contact me
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:lakshwinkrishna@gmail.com"
                  className="block text-gray-600 hover:text-black transition-colors duration-200 underline underline-offset-4"
                >
                  lakshwinkrishna@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/lakshwinkrishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-black transition-colors duration-200 underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-gray-900">
                navigation
              </h3>
              <div className="space-y-3">
                <a
                  href="/"
                  className="block text-gray-600 hover:text-black transition-colors duration-200 underline underline-offset-4"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block text-gray-600 hover:text-black transition-colors duration-200 underline underline-offset-4"
                >
                  About
                </a>
                <a
                  href="/resume"
                  className="block text-gray-600 hover:text-black transition-colors duration-200 underline underline-offset-4"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
