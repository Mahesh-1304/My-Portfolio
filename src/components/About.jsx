import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="max-w-4xl mx-auto py-20 px-6 text-gray-900 dark:text-white"
  >
    <motion.h2
      className="text-4xl font-extrabold text-center mb-10 border-b-4 border-primary inline-block pb-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>

    <motion.div
      className="text-lg leading-relaxed text-center md:text-left text-gray-700 dark:text-gray-300 space-y-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p>
        I'm a passionate and versatile developer with a strong background in{" "}
        <span className="font-semibold text-primary">web development</span>,{" "}
        <span className="font-semibold text-primary">data analytics</span>, and{" "}
        <span className="font-semibold text-primary">UI/UX design</span>.
      </p>

      <p>
        I love creating visually appealing, interactive, and accessible web experiences that solve real-world problems.
        With tools like <strong>React, Tailwind CSS</strong>, and <strong>Framer Motion</strong>,
        I bring ideas to life in the browser.
      </p>

      <p>
        When I’m not coding, I enjoy designing interfaces, analyzing data, and exploring creative storytelling through
        visuals and motion.
      </p>
    </motion.div>
  </section>
);

export default About;
