export default function Marquee({ items }: { items: string[] }) {
  const createMarqueeContent = () => {
    const content = [];
    // Repeat the items multiple times to ensure seamless looping
    const repeatedItems = [...items, ...items, ...items];

    repeatedItems.forEach((item, index) => {
      // Add diamond symbol before each item
      content.push(
        <span key={`diamond-${index}`} className="mx-4 text-1xl">
          ◊
        </span>
      );

      // Add the item text
      content.push(
        <span key={`item-${index}`} className="mx-4 text-1xl font-semibold">
          {item}
        </span>
      );

      // Add asterisk symbol after each item
      content.push(
        <span key={`asterisk-${index}`} className="mx-4 text-1xl">
          ✱
        </span>
      );
    });
    return content;
  };

  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-gray-800 bg-white text-black font-mono">
      <div className="animate-marquee whitespace-nowrap py-3">
        {createMarqueeContent()}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-3">
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
          animation: marquee 30s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Example usage with the items from the image
const App = () => {
  const marqueeItems = ["FLUIDITY", "STRATEGY", "INTENTIONALITY", "EMPATHY"];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <Marquee items={marqueeItems} />
      </div>
    </div>
  );
};
