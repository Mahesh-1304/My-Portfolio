import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    toast.success("Your message is being sent 🚀");
  };

  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16 rounded-2xl shadow-2xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500"
      {...fadeInUp}
    >
      <Toaster position="top-right" />

      <h2 className="text-4xl font-extrabold mb-8 border-b-4 border-blue-600 dark:border-violet-500 inline-block pb-3 tracking-tight text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/ubarhandemahesh2004@gmail.com"
        method="POST"
        target="_blank"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Name */}
        <div className="relative col-span-1 md:col-span-2">
          <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500"
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <FiMessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500"
          />
        </div>

        {/* Message */}
        <div className="relative col-span-1 md:col-span-2">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full pl-4 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500 resize-none"
          />
        </div>

        {/* Hidden Fields for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://mahesh41.netlify.app/thank-you"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="col-span-1 md:col-span-2 w-fit bg-blue-600 hover:bg-blue-700 dark:bg-violet-600 dark:hover:bg-violet-700 transition-colors duration-300 px-8 py-3 rounded-lg font-semibold shadow-md text-white"
        >
          {loading ? "Sending..." : "🚀 Send Message"}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
