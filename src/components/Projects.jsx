import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A sleek portfolio site built using React, Tailwind, and Framer Motion for dynamic animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/mahi/portfolio",
  },
  {
    id: 2,
    title: "Expense Tracker App",
    description:
      "Track expenses smartly with automatic detection from bank messages using Python and Django.",
    tech: ["Python", "Django", "REST API"],
    link: "https://github.com/mahi/expense-tracker",
  },
  {
    id: 3,
    title: "Facial Emotion Detection",
    description:
      "AI-powered facial emotion detection trained on a custom dataset with real-time predictions.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/mahi/emotion-detection",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-20 px-6 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map(({ id, title, description, tech, link }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5 + index * 0.05,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit GitHub repo for ${title}`}
              aria-label={`View source code for ${title}`}
              className="group relative flex flex-col justify-between w-full rounded-2xl bg-gradient-to-br from-white/90 to-blue-50 dark:from-white/5 dark:to-slate-800 backdrop-blur-md p-8 shadow-lg border border-gray-300 dark:border-white/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            >
              {/* Project Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 mb-4">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-700/30 dark:text-blue-300 border border-blue-300 dark:border-blue-500 text-xs px-3 py-1 rounded-full font-medium tracking-wide"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* View Code CTA */}
              <div className="text-right">
                <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-4 decoration-2 transition-all">
                  View Code →
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
