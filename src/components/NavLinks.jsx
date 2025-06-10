import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const underlineVariants = {
  initial: { width: 0 },
  animate: { width: "100%" },
};

const NavLinks = ({ active, onClick, className = "" }) => {
  return (
    <ul className={`flex items-center gap-6 md:gap-8 ${className}`}>
      {navLinks.map(({ name, href }) => (
        <li key={name} className="relative">
          <motion.a
            href={href}
            onClick={() => onClick(name)}
            role="link"
            aria-current={active === name ? "page" : undefined}
            className={`relative px-1 text-base font-medium transition-colors duration-300
              text-black dark:text-white hover:text-blue-500 focus:outline-none 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2`}
            whileTap={{ scale: 0.95 }}
          >
            {name}

            {active === name && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-blue-500 rounded"
                variants={underlineVariants}
                initial="initial"
                animate="animate"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
