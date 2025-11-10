import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react"; // Add this import
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "./ProjectsSection";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Add this useEffect to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  const project = projects[Number(id)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              Back to Projects
            </span>
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl font-light">
            {project.detailDescription}
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Timeline
            </h3>
            <p className="text-gray-700 font-medium">{project.timeline}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Github
            </h3>
            <div className="flex items-center space-x-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Tools/Skills
            </h3>
            <p className="text-gray-700 font-medium">{project.tools}</p>
          </div>
        </div>

        {project.image && (
          <div className="mb-20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="border-t border-gray-100 pt-20">
          <div className="mb-16">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
              Summary and Impact
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight tracking-tight">
              {project.summary}
            </h3>
          </div>

          <div className="space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="space-y-8 mt-12">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1 font-light flex-1">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
