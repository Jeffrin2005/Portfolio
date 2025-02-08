import React from 'react';

const PortfolioCard = ({ title, description, technologies, image }) => (
  <div className="bg-[#1A1A1A] rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,140,0.3)] transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-[#00FF8C]">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-[#2A2A2A] rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x200"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses",
      technologies: ["Python", "TensorFlow", "WebSocket", "React"],
      image: "https://via.placeholder.com/400x200"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      image: "https://via.placeholder.com/400x200"
    }
  ];

  return (
    <div className="w-full min-h-screen p-8 text-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#00FF8C]">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;