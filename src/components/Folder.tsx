export default function Folder() {
  return (
    <div className="max-w-md mx-auto group">
      <svg
        viewBox="0 0 300 160"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Texture pattern definition */}
        <defs>
          <pattern
            id="paperTexture"
            patternUnits="userSpaceOnUse"
            width="300"
            height="160"
          >
            <image
              href="./assets/construction-paper.png"
              x="0"
              y="0"
              width="300"
              height="160"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>

        {/* Folder Back with blue border and texture fill */}
        <path
          d="M10 40 H90 L100 20 H290 V140 H10 Z"
          fill="url(paperTexture)"
          stroke="#3B82F6" // Tailwind blue-500
          strokeWidth="4"
        />

        {/* Paper 1: Resume PDF */}
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect
            x="26"
            y="53"
            width="248"
            height="80"
            rx="2"
            fill="#fffaf0"
            stroke="#3B82F6"
            strokeWidth="2"
            className="transition-transform origin-top-left group-hover:translate-y-[-15px] group-hover:rotate-[-4deg] cursor-pointer"
          />
        </a>

        {/* Paper 2: GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect
            x="24"
            y="51"
            width="252"
            height="80"
            rx="2"
            fill="#f8eedc"
            stroke="#3B82F6"
            strokeWidth="2"
            className="transition-transform origin-top-left group-hover:translate-y-[-8px] group-hover:rotate-[-2deg] cursor-pointer"
          />
        </a>

        {/* Folder Front Panel with blue border and texture fill */}
        <g className="origin-bottom transition-transform duration-300 group-hover:-rotate-x-[25deg]">
          <path
            d="M10 40 H290 V140 H10 Z"
            fill="url(paperTexture)"
            stroke="#3B82F6"
            strokeWidth="4"
          />
          <text
            x="150"
            y="90"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black text-lg font-semibold"
          >
            My Folder
          </text>
        </g>
      </svg>
    </div>
  );
}
