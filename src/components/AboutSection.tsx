import React, { useState } from "react";
import { Footer } from "./footer";
import { Split } from "lucide-react";
import {
  Camera,
  Film,
  Gamepad2,
  Heart,
  Trophy,
  Star,
  Play,
  ExternalLink,
} from "lucide-react";
import ScrapbookBentoGrid from "./ui/bentoitem";

export const AboutSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
      {children}
    </span>
  );
  const games = [
    {
      image: "src/assets/rdr2.jpg",
      title: "Red Dead Redemption 2",
      caption:
        " ILove the story—it’s pure cinema. The insane game world, mechanics, and minute details make it unforgettable.",
    },
    {
      image: "src/assets/GOW.jpg",
      title: "God of War",
      caption:
        "The GOAT of all games. The connection to Greek myth, bringing Thor from Marvel (yes, Marvel fanboy), and the fights are pure insanity. The final reveal of Atreus as Loki—again, Marvel fanboy kicked in hard—just blew my mind.",
    },
    {
      image: "src/assets/COD.jpg",
      title: "Call of Duty",
      caption:
        " Biggest fan of TF-141, the OG squad of the franchise. Campaigns are an adrenaline rush, from stealth to full-on warfare, seamless every time.",
    },
    {
      image: "src/assets/DS.jpg",
      title: "Death Stranding",
      caption:
        "The game mechanics are pure realism. The story is amazing, and I’m a big fan of Hideo Kojima. Traversing that lonely world and connecting with others is strangely satisfying.",
    },
  ];
  const movies = [
    {
      image: "src/assets/I.jpg",
      title: "Interstellar",
      caption:
        " Interstellar – Full Nolan geek here. I love the minute details, like the ticking sound on Miller’s Planet—every 1.25 seconds equals one full day on Earth. Nolan’s practical effects and attention to realism, with minimal VFX, make the movie feel tangible and mind-blowing.",
    },
    {
      image: "src/assets/FFA2.jpg",
      title: "Five Feet Apart",
      caption:
        " It’s a simple story that hits me emotionally every time. I love how it explores connection and vulnerability.",
    },
    {
      image: "src/assets/YJHD.jpg",
      title: "Yeh Jawaani Hai Deewani",
      caption:
        " My go-to movie. Its energy, friendships, and chasing dreams with passion always lift my mood. The soundtrack and visuals perfectly capture that feeling of youth and ambition.",
    },
    {
      image: "src/assets/P.jpg",
      title: "The Prestige",
      caption:
        " Again, full Nolan geek. The mystery, suspense, and clever twists keep me hooked; every rewatch reveals something new. The way the story layers secrets makes it endlessly fascinating.",
    },
  ];

  return (
    <>
      {/* Main About Section */}
      <section id="about" className="py-32 px-8 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-10 items-center">
            <div className="space-y-8 md:pr-16">
              <div>
                <h2 className="text-3xl font-medium mb-6 text-gray-900 leading-tight">
                  I'm Lakshwin – I{" "}
                  <span className="font-extrabold">build solutions</span> using{" "}
                  <span className="font-extrabold">ML</span> and{" "}
                  <span className="font-extrabold">Software Development</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    I’m a{" "}
                    <strong>
                      pre-final year Computer Science and Engineering student
                    </strong>{" "}
                    with a strong interest in{" "}
                    <strong>Machine Learning, MLOps, and automation</strong>,
                    developing with innovative technologies that make a
                    real-world impact.
                  </p>

                  <p>
                    As the founder of{" "}
                    <a
                      href="https://localhostlabs.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-black underline"
                    >
                      <strong>./localhost</strong>
                    </a>
                    , we are currently developing <strong>Forá</strong> a{" "}
                    <strong>time capsule messaging app</strong> that combines{" "}
                    <strong>technology</strong>, <strong>design</strong>, and{" "}
                    <strong>human connection</strong>. Leading this initiative
                    has given me the opportunity to take ideas from concept to
                    execution, collaborate across disciplines, and think
                    strategically about how solutions evolve and scale.
                  </p>

                  <p>
                    I view technology not just as a tool, but as a way to
                    develop solutions that deliver meaningful impact.
                  </p>

                  <p>
                    I enjoy exploring emerging technologies, testing new ideas,
                    and enhancing my technical skills to create practical and
                    impactful solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-auto aspect-w-4 aspect-h-3 md:min-h-[400px] lg:min-h-[500px]">
                <img
                  src="src/assets/pic.jpg"
                  alt="Lakshwin"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-lg font-medium text-gray-500 mb-4 tracking-wider uppercase">
              JOURNEY
            </p>
            <h2 className="text-3xl font-medium mb-8">
              Highlights of my professional journey so far
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Consulting at Cornell */}
            <div className="space-y-4">
              <div className="aspect-video bg-white rounded-lg overflow-hidden">
                <h2>
                  Established ./localhost as a collaborative studio for building
                  digital products and experimenting with new ideas. Under this
                  initiative, I lead teams, set project direction, and oversee
                  both design and development workflows.
                </h2>
              </div>
              <div>
                <a
                  href="https://localhostlabs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium mb-2 text-black hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-2"
                >
                  ./localhost
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-gray-600">Founder</p>
              </div>
            </div>

            {/* L&T Internship */}
            <div className="space-y-4">
              <div className="aspect-video bg-white rounded-lg overflow-hidden">
                <h2>
                  Worked as an intern at L&T, gaining practical exposure to
                  industry workflows, collaborating with senior engineers, and
                  applying problem-solving skills to real-world technical
                  projects. The role strengthened my adaptability,
                  accountability, and communication in professional
                  environments.
                </h2>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7373335767978512384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium mb-2 text-black hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-2"
                >
                  Summer Intern at Larsen & Toubro (L&T)
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-gray-600">Internship</p>
              </div>
            </div>

            {/* Learning Machines */}
            <div className="space-y-4">
              <div className="aspect-video bg-white rounded-lg overflow-hidden">
                <h2>
                  Building and exploring machine learning projects—from
                  sentiment analysis to time-series forecasting. This initiative
                  reflects my curiosity for applied AI and my drive to turn
                  experiments into practical systems.
                </h2>
              </div>
              <div>
                <a
                  href="https://github.com/lakshwin-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium mb-2 text-black hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-2"
                >
                  Learning Machines
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-gray-600">GitHub Profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Editing Section */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
        <ScrapbookBentoGrid />
      </section>
      <Footer />
    </>
  );
};

export default AboutSection;
