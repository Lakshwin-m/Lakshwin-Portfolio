import React, { useState } from "react";

const ScrapbookBentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Random Thoughts",
      body: "- “Just one more epoch” — my version of “five more minutes.” — my most consistent lie. \n\n-My focus level depends on how good the background music is.\n\n-Sometimes my AI models hallucinate, and honestly… same.",
      rotation: "1deg",
      color: "bg-pink-50",
      gridArea:
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-1",
    },
    {
      id: 2,
      title: "People I Call Home",
      type: "photo",
      rotation: "1deg",
      color: "bg-white",
      gridArea:
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2",
    },
    {
      id: 3,
      title: "Words I Live By",
      body: '"We exist in moments, nothing more. Create. Explore. Evolve.\n \n Once something is a passion, the motivation is there."\n\n- Me',
      rotation: "-2deg",
      color: "bg-yellow-50",
      gridArea: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
      id: 4,
      title: "Fav Movies!",
      body: "- Interstellar\n- Five Feet Apart\n -Yeh Jawaani Hai Deewani\n- The Prestige",
      rotation: "2deg",
      color: "bg-blue-50",
      gridArea: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
      id: 5,
      title: "Fav Games",
      body: "- Red Dead Redemption 2\n- God of war\n- Death Stranding\n- Call of Duty Campaigns",
      rotation: "1.5deg",
      color: "bg-green-50",
      gridArea: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
  ];

  return (
    <div
      className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
      style={{
        background: "white",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-8">
          <p className="text-lg font-medium text-gray-500 mb-4 tracking-wider uppercase">
            ME, UNFILTERED
          </p>
          <h2 className="text-lg leading-normal text-gray-800 max-w-5xl">
            This is the side of me that doesn’t fit into code or projects — just
            raw thoughts, favorite things, and moments that make life
            interesting. A mix of movies I love, games I lose sleep over, random
            ideas that hit at 2 AM, and notes from my everyday chaos.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-[minmax(200px,auto)]">
          {cards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                className={`relative ${card.gridArea}`}
                style={{
                  transform: isHovered
                    ? "rotate(0deg) scale(1.02)"
                    : `rotate(${card.rotation})`,
                  transition: "transform 0.3s ease",
                  zIndex: isHovered ? 30 : 10,
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Tape pieces - Yellow translucent */}
                <div
                  className="absolute -top-3 sm:-top-4 left-8 sm:left-12 w-16 sm:w-20 md:w-24 h-8 sm:h-9 md:h-10 bg-yellow-300/50 -rotate-12 z-20"
                  style={{
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    backgroundImage: `
                      linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)
                    `,
                  }}
                />
                <div
                  className="absolute -top-3 sm:-top-4 right-8 sm:right-12 w-16 sm:w-20 md:w-24 h-8 sm:h-9 md:h-10 bg-yellow-300/50 rotate-12 z-20"
                  style={{
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    backgroundImage: `
                      linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)
                    `,
                  }}
                />

                {/* Card */}
                <div
                  className={`h-full ${
                    card.color
                  } p-5 sm:p-6 md:p-7 transition-shadow duration-300 ${
                    isHovered ? "shadow-2xl" : "shadow-lg"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? "6px 6px 20px rgba(0,0,0,0.25)"
                      : "4px 4px 12px rgba(0,0,0,0.2)",
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(0,0,0,0.015) 22px, rgba(0,0,0,0.05) 23px)
                    `,
                  }}
                >
                  {card.type === "photo" ? (
                    <>
                      {/* Photo placeholder */}
                      <div className="w-200 bg-gradient-to-br from-gray-200 to-gray-300 mb-4 flex items-center justify-center border border-gray-400/30">
                        <span className="text-gray-500 text-xs sm:text-sm">
                          <img
                            src="/assets/Us.jpg"
                            alt="s"
                            className="w-200 h-85 object-cover"
                          />
                        </span>
                      </div>
                      <p
                        className="text-base sm:text-lg text-gray-700 text-center"
                        style={{ fontFamily: "Comic Sans MS, cursive" }}
                      >
                        {card.title}
                      </p>
                    </>
                  ) : (
                    <>
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-normal text-gray-700 mb-3 sm:mb-4">
                        {card.title}
                      </h3>

                      {/* Body */}
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                        {card.body}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center pb-8">
          <p
            className="text-xs sm:text-sm text-gray-900/80 tracking-wide"
            style={{ fontFamily: "jetbrains, monospace" }}
          >
            A glimpse into my world
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrapbookBentoGrid;
