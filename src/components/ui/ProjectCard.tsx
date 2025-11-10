import { ArrowRight } from "lucide-react";

const ProjectCard = ({ title, description, href, index, onClick }) => {
  const handleViewProject = (e) => {
    e.preventDefault();

    // Call the onClick function to handle opening in new section
    if (onClick) {
      onClick();
    }

    // Smooth scroll to the new section after a brief delay
    setTimeout(() => {
      const projectDetailSection = document.getElementById(
        "project-detail-section"
      );
      if (projectDetailSection) {
        projectDetailSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="group cursor-pointer" onClick={handleViewProject}>
      <div className="bg-white rounded-3xl border border-gray-100 p-10 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-400 hover:-translate-y-1 relative">
        {/* Index number */}
        <div className="absolute top-8 right-8 text-gray-300 text-xs font-mono tracking-wider">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-gray-500 leading-relaxed text-base font-light">
            {description}
          </p>

          {/* Clean arrow indicator */}
          <div className="flex items-center text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
            <span className="text-sm font-medium tracking-wider uppercase">
              View Project
            </span>
            <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
