import { ProjectCard } from "./ProjectCard";
import Out4 from "@/assets/out_4.png";
import BlurText from "./ui/BlurText";
import { Footer } from "./footer";
import ProjectSection from "./ProjectsSection";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation timing controls (in milliseconds)
  const TEXT_FADE_DURATION = 100;
  const HIGHLIGHT_DURATION = 800;
  const HIGHLIGHT_1_DELAY = 200;
  const HIGHLIGHT_2_DELAY = 400;
  const HIGHLIGHT_3_DELAY = 600;
  const SCROLL_INDICATOR_DELAY = 500;

  useEffect(() => {
    // Small delay to ensure animation triggers
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Minimal grid background */}

        <div className="max-w-4xl text-black mx-auto text-center relative z-10">
          <div className="mb-24">
            <h1
              className={`text-2xl md:text-5xl lg:text-4xl font-light leading-loose md:leading-loose transition-opacity ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDuration: `${TEXT_FADE_DURATION}ms` }}
            >
              <span className="font-medium">Lakshwin</span> is a{" "}
              <span className="font-medium italic relative inline-block">
                <span className="relative z-10 px-1">
                  Computer Science undergraduate
                </span>
                <span
                  className={`absolute top-0 left-0 bottom-0 bg-blue-200/70 -z-10 rounded transition-all ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDuration: `${HIGHLIGHT_DURATION}ms`,
                    transitionDelay: `${HIGHLIGHT_1_DELAY}ms`,
                  }}
                />
              </span>{" "}
              at his pre-final year. He is the{" "}
              <span className="font-medium italic relative inline-block">
                <span className="relative z-10 px-1">
                  Founder of ./localhost
                </span>
                <span
                  className={`absolute top-0 left-0 bottom-0 bg-yellow-200/70 -z-10 rounded transition-all ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDuration: `${HIGHLIGHT_DURATION}ms`,
                    transitionDelay: `${HIGHLIGHT_2_DELAY}ms`,
                  }}
                />
              </span>{" "}
              ✱ with experience in{" "}
              <span className="font-medium italic relative inline-block">
                <span className="relative z-10 px-1">
                  Machine learning and Deep learning
                </span>
                <span
                  className={`absolute top-0 left-0 bottom-0 bg-purple-200/70 -z-10 rounded transition-all ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDuration: `${HIGHLIGHT_DURATION}ms`,
                    transitionDelay: `${HIGHLIGHT_3_DELAY}ms`,
                  }}
                />
              </span>
              , ✧ scaling data-driven systems, and ꕤ leading collaborative
              initiatives.
            </h1>
          </div>

          {/* Clean scroll indicator - only shows in hero section */}
          <div
            className={`absolute bottom-1 left-1/2 -translate-x-1/2 transition-all ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDuration: "1000ms",
              transitionDelay: `${SCROLL_INDICATOR_DELAY}ms`,
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-light tracking-widest text-black/50 uppercase">
                Scroll
              </span>
              <div className="w-5 h-8 border border-black/20 rounded-full flex items-start justify-center p-1.5">
                <div className="w-1 h-2 bg-black/40 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <ProjectSection />
      </section>
      <Footer />
    </>
  );
};
