import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};

const skillGroups = {
  "Design Tools": [
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "Adobe After Effects",
  ],
  "Web Development": ["HTML5", "CSS3", "Git & GitHub"],
  "Data Analytics": ["Excel", "SQL", "Python", "Tableau", "Power BI"],
};

const Skills = ({ className = "" }) => {
  return (
    <section
      id="skills"
      className={`w-full max-w-6xl mx-auto px-6 py-20 ${className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
      >
        My Skillset
      </motion.h2>

      <div className="space-y-16">
        {Object.entries(skillGroups).map(([group, skills], groupIndex) => (
          <div key={group} className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-6">
              {group}
            </h3>

            <motion.ul
              className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
              aria-label={`${group} skills`}
            >
              {skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={skillVariants}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm md:text-base font-medium shadow-md hover:shadow-blue-600/40 hover:scale-105 transition-transform duration-300 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  tabIndex={0}
                  aria-label={`Skill: ${skill}`}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
