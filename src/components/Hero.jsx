import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LoopingWaves from "./LoopingWaves";
import { TypeAnimation } from "react-type-animation";

// Animation helper for reusability
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 },
});

const Hero = () => {
  return (
    <section className="relative bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Content */}
      <div className="text-center z-10 px-4 pt-[20vh] md:pt-[15vh]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-surface-dark dark:text-white"
        >
          Hi, I'm{" "}
          <TypeAnimation
            sequence={[
              "Mahesh",
              2000,
              "",
          
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary font-extrabold drop-shadow-sm"
          />
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 text-lg md:text-xl text-muted-light dark:text-muted-dark"
        >
          Data Analyst • ML Developer • Frontend Developer
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-8">
          <a
            href="#projects"
            aria-label="Scroll to Projects section"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-primary hover:bg-primary-dark shadow-lg transition"
          >
            See My Work <ChevronDown className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Animated Waves */}
      <LoopingWaves />
    </section>
  );
};

export default Hero;
