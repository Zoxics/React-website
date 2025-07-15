import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marked } from "marked";
import fm from "front-matter";
import { FaFolder, FaCommentDots } from "react-icons/fa";

interface Project {
  name: string;
  meta: {
    title: string;
    description: string;
    date: string;
    repo?: string;
  };
  content: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function getProjectFiles() {
    if (projects.length > 0) return;

    const projectFiles = import.meta.glob("/public/projects/*.md", {
      as: "raw",
    });

    Object.keys(projectFiles).forEach(async (key) => {
      const fileContent = await projectFiles[key]();
      const fileName = key.split("/").pop();

      const { body, attributes } = fm(fileContent);

      setProjects((prev: any) => [
        ...prev,
        { name: fileName, content: body, meta: attributes },
      ]);
    });
  }

  useEffect(() => {
    getProjectFiles();
  }, []);

  return (
    <div className="font-staat text-left">
      {projects?.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          meta={project.meta}
          content={project.content}
        />
      ))}
    </div>
  );
}

export function Project({ name, meta, content }: Project) {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation] = useState(() => Math.random() * 10 - 5);
  return (
    <div className="w-full max-w-5xl mx-auto my-6 group px-4 sm:px-6 lg:px-8">
      <h1 className="text-primary text-6xl text-left">Projects</h1>
      <svg
        viewBox="10 00 600 141"
        className="w-full h-auto cursor-pointer min-w-[300px]"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Folder back with tab */}
        <path
          d="M10 10 H180 L280 200 H590 V140 H10 Z"
          fill="#d6be95"
          stroke="#1c4848"
          strokeWidth="1.5"
        />

        {/* Folder front */}
        <g className="origin-bottom transition-transform duration-300 group-hover:-rotate-x-[25deg]">
          <path
            d="M10 40 H590 V140 H10 Z"
            fill="#d6be95"
            stroke="#1c4848"
            strokeWidth="1.5"
          />

          {/* Description text on front of folder */}
          <text
            x="300"
            y="100"
            textAnchor="middle"
            fontSize="2rem"
            fontWeight="bold"
            fill="#be4e2d"
            pointerEvents="none"
            letterSpacing="1px"
            transform={`rotate(${rotation} 300 100)`}
          >
            {meta.description}
          </text>
        </g>

        {/* Folder tab text (name) */}
        <text
          x="100"
          y="30"
          textAnchor="middle"
          fontSize="1em"
          fontWeight="bold"
          fill="#1c4848"
          letterSpacing="1px"
          pointerEvents="none"
        >
          {name.replace(".md", "").toUpperCase()}
        </text>
      </svg>

      {/* Markdown content - perfectly aligned with folder */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[url('./assets/construction-paper.png')] bg-cover border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#1c4848] font-mono overflow-hidden"
            style={{
              width: "calc(100% * 580/600)", // Matches the folder width (590-10)/600 = 580/600
              marginLeft: "calc(100% * 0/600)", // Matches the folder left margin 10/600
              padding: "clamp(16px, 3vw, 24px)",
            }}
          >
            <div
              className="markdown prose prose-sm max-w-none prose-headings:text-dark prose-p:text-black prose-li:text-black prose-strong:text-black prose-em:text-black prose-code:text-black prose-pre:text-black prose-a:text-blue-700"
              style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Projects;
