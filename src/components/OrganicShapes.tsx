import Gemini from "@/assets/Gemini_Generated_Image_xqb2dsxqb2dsxqb2-removebg-preview.png";
import { motion } from "framer-motion";

// Define the properties for each organic shape, including animation variants
const shapes = [
  {
    className: "organic-shape-green top-32 left-12 w-48 h-48",
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, rotate: 12 },
  },
  {
    className: "organic-shape-blue bottom-32 right-16 w-56 h-56",
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, rotate: -45 },
  },
  {
    className: "organic-shape-green top-1/2 left-8 w-24 h-24",
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 0.3, scale: 1, rotate: 45 },
  },
  {
    className: "organic-shape-blue top-20 right-1/4 w-32 h-32",
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 0.4, scale: 1, rotate: 90 },
  },
];

export const OrganicShapes = () => {
  return (
    <>
      {/* Map over the shapes array and use the motion.div component for animation */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={shape.className}
          initial={shape.initial}
          animate={shape.animate}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
        >
          <img src={Gemini} alt="" className="w-full h-full object-contain" />
        </motion.div>
      ))}
    </>
  );
};
