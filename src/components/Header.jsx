import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ toggleDarkMode, isDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-surface-light dark:border-surface-dark">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Mahesh.</div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, href }) => (
            <motion.a
              key={name}
              href={href}
              onClick={() => setActive(name)}
              className="relative px-1 text-muted-light dark:text-muted-dark hover:text-primary transition"
              whileTap={{ scale: 0.95 }}
            >
              {name}
              {active === name && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-muted-light dark:text-muted-dark hover:bg-surface-light dark:hover:bg-surface-dark rounded transition"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background-light dark:bg-background-dark border-t border-surface-light dark:border-surface-dark px-6 py-4"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => {
                      setActive(name);
                      setMobileOpen(false);
                    }}
                    className="block text-muted-light dark:text-muted-dark hover:text-primary transition"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
);
}
