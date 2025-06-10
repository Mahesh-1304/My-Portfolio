import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-12 pb-8 px-6 transition-colors duration-500"
    >
      {/* SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full pointer-events-none select-none">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className="fill-white dark:fill-gray-900 transition-colors duration-500"
            d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,224C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
          />
        </svg>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-8">
        {/* Left: Copyright */}
        <div className="text-center sm:text-left text-sm font-light">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-blue-600 dark:text-violet-400">Mahi</span>. All rights reserved.
        </div>

        {/* Center: Social Icons */}
        <div className="flex justify-center space-x-8 text-3xl">
          {[
            {
              icon: <FaGithub />,
              href: "https://github.com/Mahesh-1304",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              href: "https://linkedin.com/in/mahesh-ubarhande-47822325a",
              label: "LinkedIn",
            },
            {
              icon: <FaEnvelope />,
              href: "mailto:ubarhandemahesh2004@gmail.com",
              label: "Email",
            },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.3, color: "#3b82f6" }}
              whileFocus={{ scale: 1.3, color: "#3b82f6" }}
              className="transition-colors duration-300 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-violet-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-violet-500 rounded"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Right: Empty for balance */}
        <div />
      </div>

      {/* Contact Me Button */}
      <div className="max-w-7xl mx-auto mt-10 text-center">
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-violet-600 dark:hover:bg-violet-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-violet-500 text-white font-semibold rounded-full px-8 py-3 transition-colors duration-300 shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
