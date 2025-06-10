import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background-light dark:bg-background-dark text-primary transition-colors duration-500">
      <motion.div
        className="relative w-24 h-24 mb-6"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        {/* Glowing ring */}
        <div className="absolute inset-0 border-4 border-primary-light dark:border-primary-dark rounded-full opacity-30 animate-pulse" />
        
        {/* Inner bouncing dot */}
        <motion.div
          className="absolute w-6 h-6 bg-primary rounded-full top-1 left-1 shadow-lg"
          animate={{
            x: [0, 64, 0],
            y: [0, 64, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="text-xl font-medium tracking-wide text-muted-light dark:text-muted-dark"
      >
        Crafting something great...
      </motion.p>
    </div>
  );
}
