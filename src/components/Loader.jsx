import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background-light dark:bg-background-dark text-primary transition-colors duration-500">
      <motion.div
        className="relative w-20 h-20 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Premium Pulsating Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-primary/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner rotating dot cluster */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          <div className="w-4 h-4 bg-primary rounded-full shadow-md" />
        </motion.div>
      </motion.div>

      {/* Subtle shimmering text */}
      <motion.div
        className="relative overflow-hidden text-xl font-medium tracking-wide text-muted-light dark:text-muted-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <span className="relative z-10">Loading your experience...</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </motion.div>
    </div>
  );
}
