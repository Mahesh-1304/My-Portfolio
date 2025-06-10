import React from "react";

const LoopingWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
      <svg
        className="w-[200%] h-[220px] animate-waveMove-fast"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1 - Light shade */}
        <path
          fill="currentColor"
          className="text-primary-light opacity-40"
          d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96V320H0Z"
        />
        {/* Layer 2 - Mid shade */}
        <path
          fill="currentColor"
          className="text-primary opacity-60"
          d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,192C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128V320H0Z"
        />
        {/* Layer 3 - Dark shade */}
        <path
          fill="currentColor"
          className="text-primary-dark opacity-80"
          d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160V320H0Z"
        />
      </svg>
    </div>
  );
};

export default LoopingWaves;
