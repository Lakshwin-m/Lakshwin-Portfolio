import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Export projects array so it can be imported in ProjectDetailPage
export const projects = [
  {
    title: "Time Series Forecasting – Energy Consumption",
    detailDescription:
      "Developed a Flask web app for energy consumption forecasting. The app supports CSV uploads, forecast length selection and interactive visualizations.",
    timeline: "August 2025",
    github: "https://github.com/Lakshwin-m/forecast-analytics",
    tools: "Python, TensorFlow, Pandas, Matplotlib, Streamlit",
    summary:
      "Forecasting future energy consumption trends to improve decision-making and detect anomalies.",
    description:
      "This project focuses on time series forecasting of energy consumption data to predict future usage trends. A Streamlit web app was developed where users can upload their datasets, choose the forecast length, and visualize predictions with interactive plots.",
    achievements: [
      "Implemented a Conv1D deep learning model for multi-step energy consumption forecasting.",
      "Built an interactive Streamlit web app with CSV upload and forecast visualization.",
      "Enabled users to explore energy usage patterns for better decision-making.",
    ],
  },
  {
    title: "Brain Tumor Classification – CNN",
    detailDescription:
      "Trained a CNN model on brain MRI datasets to detect the presence of tumors, supporting binary classification with high accuracy.",
    timeline: "July 2025",
    github: "https://github.com/Lakshwin-m/Brain-Tumor--Classification-CNN",
    tools:
      "Python, TensorFlow, Keras, OpenCV, Matplotlib, Xception (Transfer Learning)",
    summary:
      "Applying deep learning for early brain tumor detection using medical imaging.",
    description:
      "This project applies deep learning for brain tumor classification using MRI images. A Convolutional Neural Network (CNN) with Xception as the feature extractor was trained to classify scans into four categories: glioma, meningioma, pituitary, and no tumor. Preprocessing techniques such as image resizing, normalization, and augmentation were applied to improve accuracy and robustness.",
    achievements: [
      "Achieved 87% classification accuracy using Xception-based CNN optimized with dropout and dense layers.",
      "Preprocessed MRI images with Keras utilities (resizing, normalization, augmentation) for better robustness.",
      "Visualized training performance with accuracy–loss plots and evaluated with a confusion matrix.",
      "Demonstrated potential applications in assisting radiologists with faster diagnosis.",
    ],
  },
  {
    title: "City One - AI Powered Urban Intelligence Platform",
    detailDescription:
      "Developed an AI-powered city analytics platform built entirely on n8n workflows, integrating NLP, clustering, and automation to generate real-time urban insights.",
    timeline: "October 2025",
    github: "https://github.com/Lakshwin-m/City_one",
    tools:
      "n8n, Python, Gemini AI, scikit-learn, Supabase, Next.js, Mapbox GL JS, NLP, Vercel",
    summary:
      "An AI-driven city pulse platform combining automation, NLP, and data intelligence for real-time awareness and civic engagement.",
    description:
      "City One aggregates data from traffic APIs, EV hubs, and social media to create a live, AI-enhanced dashboard. Using n8n as the automation backbone, it applies clustering for anomaly detection and Gemini AI for sentiment analysis and chatbot responses. The platform visualizes patterns, community reports, and predictive insights on an interactive Next.js + Mapbox interface.",
    achievements: [
      "Built a fully automated data and AI workflow ecosystem using n8n.",
      "Applied clustering algorithms for real-time event and anomaly detection.",
      "Integrated Gemini AI for NLP-based sentiment classification and chatbot responses.",
      "Developed live visualization dashboards powered by Supabase and Mapbox.",
      "Enabled predictive and community-driven city insights through AI automation.",
    ],
  },
];

const ProjectDetailPage = ({ project, onBack }) => {
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
                href={
                  project.github.startsWith("http")
                    ? project.github
                    : `https://${project.github}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
              <a
                href={
                  project.github.startsWith("http")
                    ? project.github
                    : `https://${project.github}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-600 hover:text-blue-800"
                aria-label="Open GitHub in new tab"
              >
                <ExternalLink className="w-4 h-4 inline" />
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

const ProjectCard = ({ title, description, index, onClick }) => {
  return (
    <div className="group cursor-pointer h-full" onClick={onClick}>
      <div className="bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-400 hover:-translate-y-1 relative min-h-[450px] flex flex-col">
        {/* Index number */}
        <div className="absolute top-8 right-8 text-gray-300 text-xs font-mono tracking-wider">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 leading-tight tracking-tight mb-6">
            {title}
          </h3>

          <p className="text-gray-500 leading-relaxed text-base font-light mb-auto">
            {description}
          </p>

          {/* Clean arrow indicator - position at bottom */}
          <div className="pt-8 flex items-center text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
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

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 block">
            Portfolio
          </span>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-none tracking-tight">
            Featured Work
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Designing solutions that push boundaries and create meaningful
            impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              index={index}
              onClick={() => navigate(`/projects/${index}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
