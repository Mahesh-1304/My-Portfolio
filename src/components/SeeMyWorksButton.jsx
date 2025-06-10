import { ArrowRight } from "lucide-react";

const SeeMyWorksButton = () => {
  const handleClick = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-4 bg-orange-500 text-white py-3 pl-3 pr-6 rounded-full hover:bg-orange-600 transition duration-300 group shadow-md"
    >
      <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full shrink-0">
        <ArrowRight className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
      </span>
      <span className="text-base font-semibold tracking-tight">See my works</span>
    </button>
  );
};

export default SeeMyWorksButton;
