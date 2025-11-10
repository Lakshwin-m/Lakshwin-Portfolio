import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const ProjectDetailPage = ({ project, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              Back to Projects
            </span>
          </button>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl font-light">
            {project.detailDescription}
          </p>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Role
            </h3>
            <p className="text-gray-700 font-medium">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Timeline
            </h3>
            <p className="text-gray-700 font-medium">{project.timeline}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Team
            </h3>
            <p className="text-gray-700 font-medium">{project.team}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">
              Tools/Skills
            </h3>
            <p className="text-gray-700 font-medium">{project.tools}</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="border-t border-gray-100 pt-20">
          <div className="mb-16">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
              Summary and Impact
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-12 leading-tight tracking-tight">
              {project.summary}
            </h3>
          </div>

          <div className="space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="space-y-8">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1 font-light">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>

            {project.contact && (
              <div className="bg-gray-50 rounded-2xl p-8 mt-16">
                <p className="text-gray-700 font-light">
                  {project.contact.text}{" "}
                  <a
                    href={`mailto:${project.contact.email}`}
                    className="text-gray-900 hover:text-gray-600 font-medium underline decoration-2 underline-offset-2 transition-colors duration-200"
                  >
                    {project.contact.email}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
